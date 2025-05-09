"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { josefinSlab, lato } from "./Fonts";
import { motion } from "framer-motion";

interface ProjectCardProps {
  Img: string | StaticImageData;
  title: string;
  desc: string;
  href: string;
}

const ProjectCard = ({ Img, title, desc, href }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-start justify-center rounded-3xl overflow-hidden border mx-auto shadow-md"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[3/1]">
        <Image
          src={Img}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 600px"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 w-full">
        <div className="mb-3">
          <h1 className={`${lato.className} text-2xl font-bold`}>{title}</h1>
          <p className="text-gray-600 mt-1 text-sm md:text-base">{desc}</p>
        </div>
        <Link
          href={href}
          className={`${josefinSlab.className} inline-block tracking-wider text-lg rounded-3xl border border-black py-2 px-4 hover:bg-black hover:text-white hover:px-5 transition-all`}
        >
          View
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
