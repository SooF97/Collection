import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Soufien Msd",
      role: "Founder & CEO",
      description:
        "Passionate about blockchain technology and digital art. Enthusiastic about shaping the future of NFTs.",
      linkedIn: "https://www.linkedin.com/in/soufiane-masad-2a8836286/",
      twitter: "https://twitter.com/The_S00F",
      image: "/sfn_pdp.png", // Add the path to the profile image
    },
    {
      name: "Jane Smith",
      role: "Creative Director",
      description:
        "An artist at heart, with a vision for blending art and technology. Dedicated to crafting memorable NFT experiences.",
      linkedIn: "https://www.linkedin.com/in/janesmith/",
      twitter: "https://twitter.com/janesmith/",
      image: "/sfn_pdp.png", // Add the path to the profile image
    },
    {
      name: "Jane Smith",
      role: "Creative Director",
      description:
        "An artist at heart, with a vision for blending art and technology. Dedicated to crafting memorable NFT experiences.",
      linkedIn: "https://www.linkedin.com/in/janesmith/",
      twitter: "https://twitter.com/janesmith/",
      image: "/sfn_pdp.png", // Add the path to the profile image
    },
    {
      name: "Jane Smith",
      role: "Creative Director",
      description:
        "An artist at heart, with a vision for blending art and technology. Dedicated to crafting memorable NFT experiences.",
      linkedIn: "https://www.linkedin.com/in/janesmith/",
      twitter: "https://twitter.com/janesmith/",
      image: "/sfn_pdp.png", // Add the path to the profile image
    },
    // Add more team members
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-semibold text-center mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700 mb-4">{member.description}</p>
              <div className="flex space-x-4">
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  <FaTwitter className="text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
