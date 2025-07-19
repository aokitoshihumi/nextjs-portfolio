"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { Images } from "../types";

type Props = {
  images: Images[];
};

export default function Photos({ images }: Props) {
  //モーダルのために選択されている画像という状態管理
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  //selectedPhoto今表示しているもの
  //今表示しているもの前と後を更新する関数
  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              type: "spring",
              bounce: 0.3,
            }}
            initial={{ x: 400, y: 200, scale: 0 }}
            animate={{ x: 0, y: 0, scale: 1 }}
            className="rounded-lg"
          >
              <Image
                onClick={() => setSelectedIndex(index)}
                src={image.images.url}
                alt={image.images.alt || "写真"}
                width={400}
                height={300}
                className="w-full rounded-lg mb-4 object-cover"
              />
          </motion.div>
        ))}
        <Modal
          onClose={() => setSelectedIndex(null)}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          images={images}
        />
      </div>
    </>
  );
}
