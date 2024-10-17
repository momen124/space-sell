import { NextSeo } from 'next-seo';
import { Head, Html, Main, NextScript } from "next/document";
import RootLayout from "./layout";

const metadata = {
  title: 'Space Sell',
  description: 'Buy and sell space items',
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <NextSeo title={metadata.title} description={metadata.description} />
      <RootLayout>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </RootLayout>
    </Html>
  );
}
