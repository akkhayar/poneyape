import Metadata from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import LenisWrapper from "@/lib/lenis-wrapper";
import Footer from "@/components/common/Footer";
import { FirebaseProvider } from "@/context/firebaseContext";
import Head from "next/head";
import { Inter, Poppins, Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import { ReactNode } from "react";
// import i18nConfig from "../i18nConfig";
import { getLocale, getMessages } from "next-intl/server";

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

// export function generateStaticParams() {
//   return i18nConfig.locales.map((locale) => ({ locale }));
// }

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${inter.className} ${poppins.variable} ${roboto.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <FirebaseProvider>
            {/* <I18nextProvider i18n={i18n}> */}
            <Header />
            {/* </I18nextProvider> */}
            <LenisWrapper>{children}</LenisWrapper>
            <Footer />
          </FirebaseProvider>
        </NextIntlClientProvider>
        <script
          src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
