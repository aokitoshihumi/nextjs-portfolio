import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ChevronRight, ChevronLeft } from "lucide-react";

const cn = (...inputs: any) => twMerge(clsx(inputs));

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const swipeConfidenceThreshold = 50;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    };
  },
};

const buttonClassName =
  "w-[30px] h-[30px] bg-slate-50 text-slate-400 flex items-center justify-center";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export const Carousel = ({ children, className }: CarouselProps) => {
  const [[page, direction], setPage] = React.useState([0, 0]);

  const index = wrap(0, children.length, page);
  const arr = [...Array(children.length)].map((_, i) => i);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const onDotClick = (num: number) => {
    let newDirection = num > index ? 1 : -1;
    setPage([num, newDirection]);
  };

  return (
    <div
      className={cn(
        "relative flex h-[100%] w-[100%] items-end justify-center",
        className,
      )}
    >
      <>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className={cn(
              "drag-none absolute top-0 w-[100%] select-none overflow-hidden rounded-md",
              "h-[calc(100%_-_40px)]",
            )}
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_e: any, { offset, velocity }: any) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            {children[index]}
          </motion.div>
        </AnimatePresence>
      </>
      <div className="controller flex h-[40px] w-[100%] items-center justify-between">
        <button className={cn(buttonClassName)} onClick={() => paginate(-1)}>
          <ChevronLeft className="size-[16px]" />
        </button>
        <div className="dots mt-1 flex items-center gap-1 rounded-full bg-slate-50 p-2">
          {arr.map((_e: any, key: number) => {
            return (
              <span
                className={cn(
                  "h-[8px] cursor-pointer rounded-full transition-all duration-300",
                  key === index
                    ? "w-[24px] bg-slate-400"
                    : "w-[8px] bg-slate-200",
                )}
                onClick={() => onDotClick(key)}
              />
            );
          })}
        </div>
        <button className={cn(buttonClassName)} onClick={() => paginate(1)}>
          <ChevronRight className="size-[16px]" />
        </button>
      </div>
    </div>
  );
};
