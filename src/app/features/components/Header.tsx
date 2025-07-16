"use client";

import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="text-black body-font">
        <div className="container mx-auto flex justify-around p-10">
          <div className="title-font font-bold text-shadow-orange-50">
            <Link href="/" className="ml-3 text-xl">
              TgIf
            </Link>
          </div>
          <Link href="/posts/Photos" className="ml-3 text-xl">
            写真
          </Link>
        </div>
      </header>
    </>
  );
}
