"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutImg from "../../Gallery/AboutImg.jpg";
import gallery1 from "../../Gallery/gallery1.jpeg";
import gallery2 from "../../Gallery/gallery2.jpeg";
import gallery3 from "../../Gallery/gallery3.jpeg";
import gallery4 from "../../Gallery/gallery4.jpeg";
import { josefinSlab, abrilFatface, lato } from "../../components/Fonts";

const galleryImages = [
  {
    src: gallery1,
    alt: "Working on a project",
  },
  {
    src: gallery2,
    alt: "Hackathon team",
  },
  {
    src: gallery3,
    alt: "Photo with Kim Harrison",
  },
  {
    src: gallery4,
    alt: "Photo potrait",
  },
];

const AboutPage = () => {
  return (
    <div className="p-10 min-h-screen items-center justify-center flex flex-col gap-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 flex flex-col md:flex-row gap-10 items-center justify-center rounded-xl p-10"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-4 max-w-xl text-left"
        >
          <p className={`${josefinSlab.className} text-2xl text-gray-500`}>
            Welcome
          </p>
          <h1 className={`${abrilFatface.className} text-5xl text-gray-900`}>
            I&apos;m Manish Ghimire
          </h1>
          <p className={`${lato.className} text-gray-700`}>
            Hi, I&apos;m Manish Ghimire — a dedicated BCA student with a strong
            passion for building practical tech solutions. I enjoy turning ideas
            into user-friendly web applications and continuously exploring new
            technologies. With a mix of academic knowledge and hands-on project
            experience, I&apos;m always looking for opportunities to learn,
            grow, and make an impact in the tech world.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src={AboutImg}
            alt="Manish Ghimire profile"
            width={500}
            height={500}
            className="rounded-2xl object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 rounded-xl flex flex-col gap-6"
      >
        <h2 className={`${abrilFatface.className} text-4xl text-gray-800`}>
          Recent Activities
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            Working as a frontend developer on the JOOPA DIGITAL project using
            Next.js and Tailwind CSS.
          </li>
          <li>
            Practicing problem-solving on LeetCode and improving my DSA
            fundamentals.
          </li>
          <li>
            Following a consistent gym schedule and working on building physical
            discipline.
          </li>
          <li>
            Exploring new frontend libraries and tools to expand my development
            skillset.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 bg-white rounded-xl flex flex-col gap-6"
      >
        <h2 className={`${abrilFatface.className} mb-5 text-4xl text-gray-800`}>
          My Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 1.05 }}
              whileHover={{ scale: 0.95 }}
              className="overflow-hidden rounded-lg h-65"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full rounded-lg  object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
