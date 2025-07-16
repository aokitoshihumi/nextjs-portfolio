import Image from "next/image";
import { motion } from "framer-motion";
import { Images } from "../types";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

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

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-gray-400/50 flex justify-center items-center"
    >
      <motion.div
        className="relative my-6 mx-auto max-w-full max-h-screen w-[90vw] h-[90vh]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl transition"
          aria-label="Close"
        >
          &times;
        </button>
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          initialSlide={selectedIndex}
          onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
        >
          {images.map((photo, index) => (
            <SwiperSlide key={photo.id}>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={photo.images.url}
                  alt={`photo-${index}`}
                  fill
                  className="object-contain"
                  quality={80}
                  onClick={(e) => e.stopPropagation}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
