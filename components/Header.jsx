'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const bgImages = [
  '/slide_1.jpg',
  '/slide_2.jpg',
  '/slide_3.webp',
];

export default function Header() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="h-[80vh] w-full bg-cover bg-center relative transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${bgImages[current]})` }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Blogify
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 max-w-xl drop-shadow">
          Discover the latest trends, tips, and tools in modern web development.
        </p>
        <Link href={'/blogs'} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Explore Blogs
        </Link>
      </div>
    </section>
  );
}
