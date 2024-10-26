import { WebsiteData } from "@/types";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from "uuid";

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

export const fetchData = async (collectionName: string) => {
  const data: any = [];
  const dataSnapshot = await getDocs(collection(db, collectionName));
  dataSnapshot.docs.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));

  return data;
};
