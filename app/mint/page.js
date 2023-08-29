"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Connect from "../components/Connect";

import Loading from "react-loading";

import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Collection from "../Collection.json";
import { ethers } from "ethers";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [minted, setMinted] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [total, setTotal] = useState();
  const [totalMintedSupply, setMintedSupply] = useState();
  const [pricePerItem, setPricePerItem] = useState();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMint = async () => {
    setMinted(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      console.log(address);
      const contract = new ethers.Contract(
        Collection.address,
        Collection.abi,
        signer
      );
      const price = await contract.pricePerNFT();
      console.log("price per nft:", price.toString());
      const priceToPay = price * quantity;
      const transaction = await contract.mintNFT(quantity, {
        value: priceToPay,
      });
      await transaction.wait();
      getSupply();
      toast("NFT minted successfully!", { type: "success" });
      console.log(transaction);
    } catch (error) {
      console.log("Error: ", error);
    }
    setMinted(false);
  };

  async function getSupply() {
    setFetched(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const contract = new ethers.Contract(
        Collection.address,
        Collection.abi,
        provider
      );
      const price = await contract.pricePerNFT();
      const maxTotalSupply = await contract.maxSupply();
      const mintedSupply = await contract.totalSupply();
      const valueInBN = ethers.BigNumber.from(price);
      const valueInEth = ethers.utils.formatEther(valueInBN);
      setPricePerItem(valueInEth);
      setTotal(maxTotalSupply.toString());
      setMintedSupply(mintedSupply.toString());
    } catch (error) {
      console.log("Error: ", error);
    }
    setFetched(false);
  }

  useEffect(() => {
    getSupply();
  }, []);

  return (
    <motion.div
      className=" py-12"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75 }}
    >
      <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="max-w-screen-lg mx-auto p-6 rounded-lg flex flex-col items-center">
          <div className="mb-4">
            <img
              src="/get.gif"
              alt="NFT"
              className="w-full max-h-96 object-cover rounded-lg"
            />
          </div>
          {fetched && <div className="spinner"></div>}
          <div className="flex flex-col items-center justify-center m-2">
            {total && <h1>Total Collection Supply : {total}</h1>}
            {totalMintedSupply && (
              <h2>
                Minted : {totalMintedSupply}/{total}
              </h2>
            )}
            {pricePerItem && <h2>Price : {pricePerItem} MATIC</h2>}
          </div>
          <button className="Btn" onClick={openModal}>
            Mint{" "}
            <svg className="svgIcon" viewBox="0 0 576 512">
              <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
            </svg>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button className="absolute  " onClick={closeModal}>
                <AiOutlineClose className="text-gray-500 text-lg" />
              </button>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Mint NFT</h2>
            <p className="text-gray-600 mb-6">
              Select the desired quantity and connect your wallet to mint.
            </p>
            <p className="font-bold italic">(Max. quantity = 2)</p>
            <input
              type="number"
              className="w-full bg-gray-100 px-4 py-2 rounded-lg mb-4"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <div className="flex flex-col justify-center items-center gap-4">
              <Connect />
              <button
                className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-purple-700"
                onClick={handleMint}
              >
                Mint {quantity}
              </button>

              {/* {minted && (
                <div className="mt-2 flex justify-center">
                  <Loading type="spin" color="black" height={25} width={25} />
                </div>
              )} */}
              {minted && <div className="spinner"></div>}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
export default page;
