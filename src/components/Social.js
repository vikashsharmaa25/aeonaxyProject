import React from "react";
import {
  FaWix,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

function Social() {
  return (
    <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-6 sm:my-8 md:my-10 lg:my-12 xl:my-16">
        Social
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 ">
        <SocialIcon icon={<FaWix />} />
        <SocialIcon icon={<FaFacebook />} />
        <SocialIcon icon={<FaInstagram />} />
        <SocialIcon icon={<FaYoutube />} />
        <SocialIcon icon={<FaTwitter />} />
      </div>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <div className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl border border-gray-700 hover:bg-blue-500 hover:text-white rounded-lg w-full flex justify-center items-center">
      {icon}
    </div>
  );
}

export default Social;
