"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Appear({ title }: { title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1")!);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  let href = "";
  if(title === "ブログ") {
    href = "../posts/Blog";
  } else if(title === "写真"){
    href = "../posts/Photos";
  } else {
    
  }

  return (
    <div className="flex justify-center items-center p-10">
      <div className="container" ref={containerRef}>
        
        <Link href={href}>
          <h1 className="h1">{title}</h1>
        </Link>
        <Stylesheet />
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-black"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                font-size: 40px;
                display: flex;
                position: relative;
                justify-content: right;
                align-items: center;
                width: 60%;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
