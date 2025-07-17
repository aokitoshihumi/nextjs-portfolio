"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Blog } from "../types";

type Props = {
  blogs: Blog[];
};

export default function Eyecatch({ blogs }: Props) {
  return (
    <>
      <motion.div
        initial={{ x: 400, y: 200, scale: 0 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.3 }}
      >
        <div className="flex justify-center">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10"
          >
            {blogs.map(
              (item) =>
                item.eyecatch?.url && (
                  <motion.div
                    layout
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="max-w-sm relative overflow-hidden rounded-lg group cursor-pointer group-hover:scale-105"
                  >
                    <Link href={`/posts/${item.id}`}>
                      <Image
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        src={item.eyecatch.url}
                        alt={item.title || "アイキャッチ画像"}
                        height={170}
                        width={300}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <h3 className="text-white text-xl font-bold">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  </motion.div>
                )
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
