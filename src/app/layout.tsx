import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";

import "./globals.css";

import { PrismicPreview } from "@prismicio/next";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Toaster } from "@/components/ui/toaster";
import { FirebaseProvider } from "@/context/firebaseContext";
import LenisWrapper from "@/lib/lenis-wrapper";
import { repositoryName } from "@/prismicio";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "poneyape",
  description: "Poneyape",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} ${roboto.variable}`}
      >
        <FirebaseProvider>
          <Header />
          {/* <LenisWrapper> */}
          {children}
          {/* </LenisWrapper> */}
          <Footer />
          <Toaster />
        </FirebaseProvider>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
