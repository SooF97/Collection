import React from "react";
import {
  RiSecurePaymentLine,
  RiArtboardLine,
  RiUserHeartLine,
  RiGlobalLine,
  RiShieldUserLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

const About = () => {
  return (
    <section className=" mt-5 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Discover the Sfn NFT Collection
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Experience the world of unique and captivating digital art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="rounded-full p-3 bg-purple-100">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const featureItems = [
  {
    icon: <RiSecurePaymentLine className="text-purple-600 text-3xl" />,
    title: "Secure Transactions",
    description:
      "Our NFT marketplace ensures secure and transparent transactions through blockchain technology.",
  },
  {
    icon: <RiArtboardLine className="text-purple-600 text-3xl" />,
    title: "Unique Art Pieces",
    description:
      "Each NFT in our collection is a masterpiece created by talented artists around the world.",
  },
  {
    icon: <RiUserHeartLine className="text-purple-600 text-3xl" />,
    title: "Support Artists",
    description:
      "By purchasing NFTs, you directly support artists and their creative endeavors.",
  },
  {
    icon: <RiGlobalLine className="text-purple-600 text-3xl" />,
    title: "Global Community",
    description:
      "Join a diverse community of art enthusiasts and collectors from all corners of the world.",
  },
  {
    icon: <RiShieldUserLine className="text-purple-600 text-3xl" />,
    title: "Ownership Rights",
    description:
      "Own authentic digital art with verifiable ownership rights through blockchain.",
  },
  {
    icon: <RiMoneyDollarCircleLine className="text-purple-600 text-3xl" />,
    title: "Potential Value",
    description:
      "Invest in NFTs with the potential for increased value over time in the growing NFT market.",
  },
];

export default About;
