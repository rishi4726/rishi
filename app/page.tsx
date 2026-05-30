"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full bg-black text-white overflow-hidden">
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between p-6">
        <h1 className="text-3xl font-bold tracking-widest">FAHHH</h1>

        <div className="flex gap-6">
          <Link href="#shop">SHOP</Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#contact">CONTACT</Link>
        </div>
      </nav>

      <section className="h-screen w-full flex flex-col items-center justify-center relative">
        <div className="text-center space-y-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-wider">
            FAHHH
          </h1>

          <p className="mt-4 text-gray-400 text-center max-w-lg mx-auto">
            We Don't Follow Trends. We Create Energy.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition">
              SHOP NOW
            </button>
            
            <Link
              href="/clock"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 font-bold rounded-full hover:scale-105 transition inline-block"
            >
              WORLD CLOCK
            </Link>

            <Link
              href="/jokes"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 font-bold rounded-full hover:scale-105 transition inline-block"
            >
              JOKE GENERATOR
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
