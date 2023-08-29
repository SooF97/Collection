"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="  text-black">
      <motion.div
        className=" mx-auto flex px-5 md:py-8 gap-12  items-center justify-center flex-col"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
      >
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight tracking-wide">
            Unlock Infinite Creativity
          </h1>
          <p className="text-2xl mb-6">
            Discover a curated fusion of art, technology, and emotion, each
            piece a gateway to an unparalleled digital experience!
          </p>
          <div className="flex justify-center mx-auto">
            <Link href="/mint" target="_blank">
              <button className="Btn">
                Mint{" "}
                <svg className="svgIcon" viewBox="0 0 576 512">
                  <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                </svg>
              </button>
            </Link>
          </div>
          <Image
            className="flex my-2 justify-center mx-auto"
            src="/vect.png"
            alt="hero"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
