"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [position, setPosition] = useState({ left: 780, top: 620 });

    const handleHover = () => {
      const x = Math.random() * (window.innerWidth - 85);
      const y = Math.random() * (window.innerHeight - 48);
      setPosition({ left: x, top: y });
    };

    const handleClick = () => {
      handleHover();
    };
  return (
    <div className="grid h-16 place-items-center py-20 bg-pink-200 min-h-screen">
      <h1 className="text-4xl font-serif text-white">Do you wanna go out with me?</h1>
      <div>
        <Image src="/giphy.gif" alt="my gif" height={500} width={500} />
      </div>
      <div className="flex space-x-16">
        <button className="bg-pink-300 rounded-lg text-white font-bold py-2 px-4 mr-48">
          <Link href="/yes">Yes</Link>
        </button>
        <button
          className="bg-pink-300 rounded-lg  text-white font-bold py-2 px-4"
          id="noButton"
          style={{
            position: "absolute",
            left: `${position.left}px`,
            top: `${position.top}px`,
          }}
          onMouseEnter={handleHover}
          onClick={handleClick}
        >
          No
        </button>
      </div>
    </div>
  );
}
