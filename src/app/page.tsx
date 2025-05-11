"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import animationData from "../LottieFiles/animationData4.json";
import { abrilFatface, josefinSlab, lato } from "../components/Fonts";


// made dynamic import of the lottiefiles
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function Home() {
  return (
    <div
      className={`${lato.className} bg-white min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-evenly text-black p-6 md:p-12 lg:p-20`}
    >
      {/* Left Section: Text */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center lg:text-left max-w-4xl mt-20"
      >
        <h1
          className={`${lato.className} text-5xl md:text-7xl lg:text-[9rem] font-bold leading-tight`}
        >
          HELLO, <br />
          <span
            className={`${abrilFatface.className} font-extrabold text-6xl md:text-[8rem] lg:text-[10rem]`}
          >
            WORLD
          </span>
        </h1>
        <p className="mt-4 mb-8 text-lg md:text-xl lg:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0">
          👋 My name is Manish. I&apos;m a Frontend Developer and it&apos;s nice
          to meet you all.
        </p>
        <Link
          href="/about"
          className={`${josefinSlab.className} inline-block tracking-wider text-lg md:text-xl rounded-3xl border border-black py-3 px-5 hover:bg-black hover:text-white transition-all`}
        >
          About Me
        </Link>
      </motion.div>

      {/* Right Section: Lottie Animation */}
      <motion.div
        initial={{ opacity: 0, y: -100, x: -100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-[400px] md:max-w-[500px]"
      >
        <Player
          autoplay
          loop
          src={animationData}
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
    </div>
  );
}
