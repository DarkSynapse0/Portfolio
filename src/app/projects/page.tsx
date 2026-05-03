"use client";
import React from "react";
import { motion } from "framer-motion";
import RCE from "../../Gallery/RCE.png";
import DG from "../../Gallery/DG.png";
import PT from "../../Gallery/PT.png";
import CCT from "../../Gallery/CCT.png";
import oraculum from "../../Gallery/oraculum.png";
import nayaghar from "../../Gallery/nayaghar.png";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    Img: nayaghar,
    title: "NayaGhar",
    desc: "A housing platform connecting students and young professionals moving across Nepal with verified, affordable rentals.",
    href: "/projects/nayaghar",
    meta: "Product · 2025",
  },
  {
    Img: oraculum,
    title: "Oraculum",
    desc: "An academic Q&A platform combining AI assistance with verified teacher responses — structured, reliable learning.",
    href: "/projects/oraculum",
    meta: "EdTech · 2025",
  },
  {
    Img: RCE,
    title: "Random Country Explorer",
    desc: "A playful country-discovery interface that surfaces a new place each click — built for curiosity.",
    href: "/projects/random-country-explorer",
    meta: "Concept · 2024",
  },
  {
    Img: DG,
    title: "Dice Game",
    desc: "A two-player dice game with crisp interactions and tight feedback loops — a small experiment in micro-motion.",
    href: "/projects/dice-game",
    meta: "Concept · 2024",
  },
  {
    Img: PT,
    title: "API Data Table",
    desc: "A sortable, searchable data table consuming a live API — a study in pagination and empty states.",
    href: "/projects/api-data-table",
    meta: "Tool · 2024",
  },
  {
    Img: CCT,
    title: "Currency Converter",
    desc: "A clean, fast currency converter pulling live rates — minimal interface, maximum clarity.",
    href: "/projects/currency-converter-tool",
    meta: "Tool · 2024",
  },
];

const Page = () => {
  return (
    <section className="px-6 pb-20 pt-40 md:px-10 lg:pt-48">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
            (01) Selected work
          </p>
          <h1 className="mt-6 font-display text-[3.25rem] leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl break-words">
            A small archive
            <br />
            of <span className="italic text-coral">things</span> I&apos;ve built.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink/75 leading-relaxed">
            Production work, side projects, and one-off experiments. Each one
            is a step in figuring out what I want my craft to look like.
          </p>
        </motion.div>

        <div className="hairline mt-16" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} index={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
