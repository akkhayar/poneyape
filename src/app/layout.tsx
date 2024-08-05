import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import LenisWrapper from "@/lib/lenis-wrapper";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
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
      <body className={`${inter.className} ${poppins.variable}`}>
        <NavBar />
        <LenisWrapper>
          {children}
        </LenisWrapper>
        <Footer/>
      </body>
    </html>
  );
}
