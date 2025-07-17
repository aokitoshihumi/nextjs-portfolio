"use client";

import Image from "next/image";
import React from "react";
import ProfileImage from "../../../../public/profileImage.jpg";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-[90vw] max-w-[512px] mx-auto"
    >
      <div className="aspect-[2/1] bg-gray-500 rounded-lg shadow-sm">
        <div className="flex gap-10 p-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              className="w-full max-w-[176px] sm:max-w-[150px] max-[400px]:max-w-[100px] aspect-square mb-3 ml-4 rounded-full shadow-lg object-cover"
              src={ProfileImage}
              width={300}
              height={300}
              alt="ProfileImage"
            />
            <h5 className="mb-1 text-xl font-medium text-white"> Moss</h5>
          </div>

          <div className="flex flex-col mt-4 pl-4">
            <h5 className="text-sm sm:text-base md:text-lg lg:text-xl text-white">スキル</h5>
            <div className="border-1" />
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 text-white">
              ・Typescript（学習中）<br />
              ・React（学習中）<br />
              ・Next.js（学習中）
            </p>

            <h5 className="text-sm sm:text-base md:text-lg lg:text-xl text-white">趣味</h5>
            <div className="border-1" />
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 text-white">
              筋トレ・写真・旅行
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
