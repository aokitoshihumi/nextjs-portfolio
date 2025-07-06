"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { Images } from "../types";

type Props = {
    images: Images[];
};

export default function Photos ({ images }: Props) {
  //モーダルのために選択されている画像という状態管理
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  //selectedPhoto今表示しているもの
  //今表示しているもの前と後を更新する関数
  return (
    <>
      <div className="mx-auto max-w-7xl px-4">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="overflow-hidden rounded-lg break-inside-avoid"
            >
              <Image
                onClick={() => setSelectedIndex(index)}
                src={image.images.url}
                alt={image.images.alt || "写真"}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            </motion.div>
            ))}
          </div>
        </div>
        <Modal 
        onClose={() => setSelectedIndex(null)}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        images={images}
      />
    </>
  );
};
