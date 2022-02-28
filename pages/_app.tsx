import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Auction Software</title>
        <meta
          name="description"
          content="A merchandise management system for Auction Software"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <CookiesProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
