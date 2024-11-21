import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";

import "./globals.css";

import { PrismicPreview } from "@prismicio/next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Toaster } from "@/components/ui/toaster";
import LenisWrapper from "@/lib/lenis-wrapper";
import UseQueryProvider from "@/lib/query-client-provider";
import { getUserLocale } from "@/locale";
import { createClient, repositoryName } from "@/prismicio";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "poneyape",
  description: "Poneyape",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getUserLocale();
  const client = createClient();

  const data = await client.getSingle("header_links", { lang: locale });

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} ${roboto.variable}`}
      >
        <UseQueryProvider>
          <NuqsAdapter>
            <Header locale={locale} data={data} />
            <LenisWrapper>{children}</LenisWrapper>
            <Footer />
            <Toaster />
            <PrismicPreview repositoryName={repositoryName} />
          </NuqsAdapter>
        </UseQueryProvider>
      </body>
    </html>
  );
}
