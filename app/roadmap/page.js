import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const Roadmap = () => {
  return (
    <section className="py-2 md:py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-8">
          Our Project Roadmap
        </h2>
        <div className="flex flex-col md:flex-col gap-4 justify-between items-center">
          <div className="w-auto md:w-1/2 p-8 bg-purple-800 rounded-lg mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">
              Phase 1: Concept & Planning
            </h3>
            <p className="text-gray-300 mb-4">
              Research and conceptualization of the NFT collection, forming the
              project team.
            </p>
            <IoIosCheckmarkCircleOutline className="text-purple-600 text-3xl  md:bottom-4 md:right-4" />
          </div>
          <div className="w-auto md:w-1/2 p-8 bg-purple-800 rounded-lg relative">
            <h3 className="text-xl font-semibold text-white mb-4">
              Phase 2: Community Engagement
            </h3>
            <p className="text-gray-300 mb-4">
              Engaging with the community, gathering feedback, and refining the
              collection's vision.
            </p>
            <BsArrowRight className="text-purple-600 text-3xl md:absolute md:bottom-4 md:left-4" />
          </div>
          <div className=" w-auto md:w-1/2 p-8 bg-purple-800 rounded-lg relative">
            <h3 className="text-xl font-semibold text-white mb-4">
              Phase 3: Art & Website Creation
            </h3>
            <p className="text-gray-300 mb-4">
              Generating the art work and creating the project website.
            </p>
            <BsArrowRight className="text-purple-600 text-3xl md:absolute md:bottom-4 md:left-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
