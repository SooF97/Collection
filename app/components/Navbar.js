"use client";
import React, { useState } from "react";
import { FaBars, FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-6 ">
      <div className="mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex flex-row items-center justify-center gap-2">
            <Image src="/loo.svg" alt="logo" width={45} height={45} />
            <h1 className="text-black text-xl md:text-3xl font-bold">
              Sfn Collection
            </h1>
          </div>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-black hover:underline hover:font-bold">
            Home
          </Link>
          <Link
            href="/about"
            className="text-black hover:underline hover:font-bold"
          >
            About
          </Link>
          <Link
            href="/roadmap"
            className="text-black hover:underline hover:font-bold"
          >
            Roadmap
          </Link>
          <Link
            href="/team"
            className="text-black hover:underline hover:font-bold"
          >
            Team
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <FaBars size={24} />
          </button>
        </div>
        <div className="hidden md:flex md:flex-row md:gap-2 items-center ">
          <div className="flex space-x-2 text-black">
            <Link
              href="https://twitter.com/home"
              target="_blank"
              className="hover:scale-150"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="https://www.discord.com/"
              target="_blank"
              className="hover:scale-150"
            >
              <FaDiscord size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:scale-150"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
          <Link href="/mint" target="_blank">
            <button className="Btn">
              Mint{" "}
              <svg className="svgIcon" viewBox="0 0 576 512">
                <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile menu  */}
      {isOpen && (
        <div className="flex justify-end">
          <div className="bg-white flex flex-col items-center justify-center w-1/2 py-3 px-3 rounded-md md:hidden ">
            <Link
              href="/"
              className="text-black block py-2 hover:underline hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black block py-2 hover:underline hover:font-bold"
            >
              About
            </Link>
            <Link
              href="/roadmap"
              className="text-black block py-2 hover:underline hover:font-bold"
            >
              Roadmap
            </Link>
            <Link
              href="/team"
              className="text-black block py-2 hover:underline hover:font-bold"
            >
              Team
            </Link>
            <Link href="/mint" target="_blank">
              <button className="Btn mb-2">
                Mint{" "}
                <svg className="svgIcon" viewBox="0 0 576 512">
                  <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                </svg>
              </button>
            </Link>
            <div className="flex space-x-2 text-black">
              <Link
                href="https://twitter.com/home"
                target="_blank"
                className="hover:scale-150"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href="https://www.discord.com/"
                target="_blank"
                className="hover:scale-150"
              >
                <FaDiscord size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="hover:scale-150"
              >
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
