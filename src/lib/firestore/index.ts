import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";

import { WebsiteData, WebsiteDataFetch } from "@/types";

import { db, storage } from "../firebase/firebase";
import { auth as adminAuth } from "../firebase/firebase-admin";

export const uploadWebsite = async (data: WebsiteData) => {
  try {
    const res = await addDoc(collection(db, "triage-websites"), data);

    return { success: true, data: res };
  } catch (error) {
    return { success: true, error };
  }
};

export const uploadImage = async (file: File) => {
  try {
    const storageRef = ref(storage, `sitedata/${file.name + uuid()}`);
    const res = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(res.ref);

    return { success: true, res, url };
  } catch (error) {
    return { success: false, error };
  }
};

export const uploadMultipleImages = async (files: File[]) => {
  const uploadPromises = files.map((file) => uploadImage(file));

  // Wait for all uploads to complete
  const results = await Promise.all(uploadPromises);

  // Filter successful uploads and extract URLs
  const urls = await results.map((result) => result.url);

  // Optional: Log or handle any failed uploads
  const errors = results.map((result) => result.error);

  // let urls: string[] = [];
  // for (let i = 0; i < files.length; i++) {
  //   const storageRef = ref(storage, `sitedata/${files[i].name + uuid()}`);
  //   const res = await uploadBytes(storageRef, files[i]).then((res) => res);
  //   const url = await getDownloadURL(res.ref);
  //   urls.push(url);
  // }

  return { urls, errors };
};

export const fetchData = async (collectionName: string) => {
  const data: any[] = [];
  const dataSnapshot = await getDocs(collection(db, collectionName));
  dataSnapshot.docs.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));

  return data;
};

export const fetchDataById = async (collectionName: string, value: string) => {
  const docRef = doc(db, collectionName, value);
  const dataSnapshot = await getDoc(docRef);
  const data = dataSnapshot.data() as WebsiteDataFetch;

  return data;
};
