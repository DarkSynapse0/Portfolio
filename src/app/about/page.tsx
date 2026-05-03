"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutImg from "../../Gallery/AboutImg.jpg";
import gallery1 from "../../Gallery/gallery1.jpeg";
import gallery2 from "../../Gallery/gallery2.jpeg";
import gallery3 from "../../Gallery/gallery3.jpeg";
import gallery4 from "../../Gallery/gallery4.jpeg";

const galleryImages = [
  { src: gallery1, alt: "Working on a project", label: "Studio" },
  { src: gallery2, alt: "Hackathon team", label: "Hackathon" },
  { src: gallery3, alt: "Photo with Kim Harrison", label: "Meetup" },
  { src: gallery4, alt: "Portrait", label: "Portrait" },
];

const activities = [
  {
    label: "Frontend Engineer",
    body: "Building Joopa Digital with Next.js and Tailwind CSS — a marketing-meets-product surface for a growing studio.",
    tag: "Now",
  },
  {
    label: "DSA Practice",
    body: "Sharpening problem-solving fundamentals on LeetCode — consistency over speed.",
    tag: "Daily",
  },
  {
    label: "Physical Discipline",
    body: "Following a structured gym schedule. Reps, rest, repeat.",
    tag: "Routine",
  },
  {
    label: "Frontend Exploration",
    body: "Sampling new libraries and motion patterns to keep the toolbox sharp.",
    tag: "Ongoing",
  },
];

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Git",
  "Figma",
];

const AboutPage = () => {
  return (
    <div className="px-6 pb-20 pt-40 md:px-10 lg:pt-48">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
            (01) About
          </p>
          <h1 className="mt-6 font-display text-[3.25rem] leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl break-words">
            A frontend
            <br />
            <span className="italic text-coral">developer</span>
            <br className="sm:hidden" />
            <span> from Nepal.</span>
          </h1>
        </motion.div>

        {/* Bio + Image */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={AboutImg}
                alt="Manish Ghimire"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-cream/80 backdrop-blur px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em]">
                Manish · 2026
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
              delay: 0.15,
            }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
              The short version
            </p>
            <p className="mt-6 font-display text-2xl leading-[1.2] sm:text-3xl md:text-4xl break-words">
              I&apos;m a BCA student who fell in love with{" "}
              <span className="italic text-coral">making interfaces</span> —
              the kind that feel quick, considered, and quietly opinionated.
            </p>
            <p className="mt-8 text-lg text-ink/75 leading-relaxed">
              I split my time between school, side projects, and shipping
              production work. I learn by building, refine by reading, and care
              about the small details — easing curves, optical alignment, the
              spacing between letters. Tech is the medium; craft is the point.
            </p>

            <div className="mt-12">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-ink/15 bg-cream-soft/60 px-3 py-1 text-sm text-ink/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent activities */}
        <section className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="grid grid-cols-1 gap-6 md:grid-cols-12"
          >
            <p className="md:col-span-3 font-mono text-xs uppercase tracking-[0.22em] text-stone">
              (02) Currently
            </p>
            <h2 className="md:col-span-9 font-display text-4xl leading-[1.05] sm:text-5xl md:text-7xl break-words">
              What I&apos;m
              <span className="italic text-coral"> up to.</span>
            </h2>
          </motion.div>

          <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
            {activities.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1] as const,
                  delay: i * 0.08,
                }}
                className="group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors hover:bg-cream-soft/50"
              >
                <span className="col-span-2 font-mono text-xs text-stone md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="col-span-10 md:col-span-4 font-display text-2xl md:text-3xl">
                  {a.label}
                </h3>
                <p className="col-span-12 md:col-span-5 text-ink/70 leading-relaxed">
                  {a.body}
                </p>
                <span className="col-span-12 md:col-span-2 md:text-right font-mono text-xs uppercase tracking-[0.18em] text-coral">
                  {a.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="grid grid-cols-1 gap-6 md:grid-cols-12"
          >
            <p className="md:col-span-3 font-mono text-xs uppercase tracking-[0.22em] text-stone">
              (03) Frames
            </p>
            <h2 className="md:col-span-9 font-display text-4xl leading-[1.05] sm:text-5xl md:text-7xl break-words">
              Bits of
              <span className="italic text-coral"> life</span>, off-screen.
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((image, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1] as const,
                  delay: i * 0.1,
                }}
                className={`group relative overflow-hidden rounded-xl ${
                  i === 0 || i === 3
                    ? "row-span-2 aspect-[3/4]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-cream/90 backdrop-blur px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
