"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Images } from "../types";
import { A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  images: Images[];
  onClose: () => void;
};

export default function Modal({
  selectedIndex,
  setSelectedIndex,
  images,
  onClose,
}: Props) {
  if (selectedIndex === null) return null;

  const PrevPhoto = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const NextPhoto = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  const photo = images[selectedIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-gray-400/50 flex justify-center items-center"
      onClick={() => onClose()}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-xl"
      >
        ×
      </button>

      <button
        onClick={PrevPhoto}
        className="absolute top-1/2 left-4 z-50 -translate-y-1/2 w-10 h-24 bg-black/30 hover:bg-black/50 text-white text-3xl font-bold rounded-md flex items-center justify-center"
      >
        ‹
      </button>

      <motion.div
        className="w-full h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative sm:w-[70vw] h-[90vh] m-auto">
          <Image
            src={photo.images.url}
            alt={photo.images.alt ?? "photo"}
            fill
            className="object-contain"
            quality={80}
          />
        </div>
      </motion.div>

      <button
        onClick={NextPhoto}
        className="absolute top-1/2 right-4 z-50 -translate-y-1/2 w-10 h-24 bg-black/30 hover:bg-black/50 text-white text-3xl font-bold rounded-md flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}
