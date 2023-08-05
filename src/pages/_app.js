import React from "react";
import Head from "next/head";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
// import { Nunito } from "@next/font/google";

// // If loading a variable font, you don't need to specify the font weight
// const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jack Scottow Web Dev</title>
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
