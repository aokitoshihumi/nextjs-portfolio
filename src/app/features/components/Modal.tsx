import Image from "next/image";
import { motion } from "framer-motion";
import { Images } from "../types";

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
  //selectedIndex
  if (selectedIndex === null || selectedIndex === undefined) return null;
  const selectedPhoto = images[selectedIndex];
  const LastIndex = images.length;

  const PrevPhoto = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const LastIndex = images.length - 1;
    let prevIndex = selectedIndex - 1;
    if (prevIndex <= 0) {
      prevIndex = LastIndex;
      setSelectedIndex(prevIndex);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  //右ボタンを押すと + 1
  const NextPhoto = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const nextIndex = selectedIndex + 1;
    if (nextIndex >= images.length) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(nextIndex);
    }
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-gray-400/50 flex justify-center items-center"
      >
        <button
          onClick={PrevPhoto}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white text-3xl font-bold w-10 h-24 flex items-center justify-center shadow-md transition rounded-md"
        >
          &lt;
        </button>
        <motion.div
          className="relative my-6 mx-auto max-w-full max-h-screen"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <Image
              key={selectedPhoto.id}
              className="w-full h-full max-w-screen max-h-screen object-contain"
              src={selectedPhoto.images.url}
              alt="photo"
              height={800}
              width={600}
              quality={80}
            />
          </div>
        </motion.div>
        <button
          onClick={NextPhoto}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white text-3xl font-bold w-10 h-24 flex items-center justify-center shadow-md transition rounded-md"
        >
          &gt;
        </button>
      </div>
    </>
  );
}
