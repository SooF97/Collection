"use client";
import "./globals.css";
import { Ysabeau } from "next/font/google";
import Navbar from "./components/Navbar";

import { ThirdwebProvider } from "@thirdweb-dev/react";

const font = Ysabeau({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="03ed6dc80620c178a1786170c8d5db39"
    >
      <html lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Customize your metadata here */}
        <meta name="title" content="Official Sfn Collection dApp" />
        <meta
          name="description"
          content="Blockchain web 3.0 smart contracts nft dapp"
        />
        {/* Add your favicon link here */}
        <link rel="icon" href="/favicon.svg" />
        <title>Official Sfn Collection dApp</title>
        <body className={font.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ThirdwebProvider>
  );
}
