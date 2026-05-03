"use client";
import { notFound, useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import RCE from "../../../Gallery/RCE.png";
import DG from "../../../Gallery/DG.png";
import PT from "../../../Gallery/PT.png";
import CCT from "../../../Gallery/CCT.png";
import oraculum from "../../../Gallery/oraculum.png";
import nayaghar from "../../../Gallery/nayaghar.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projects = [
  {
    slug: "nayaghar",
    Img: nayaghar,
    title: "NayaGhar",
    desc: "NayaGhar is a housing platform that connects students and young professionals moving to cities across Nepal with safe, affordable, and verified housing options.",
    link: "https://nayaghar.manishghimire01.com.np/",
    role: "Frontend Developer",
    year: "2025",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    type: "Product",
  },
  {
    slug: "oraculum",
    Img: oraculum,
    title: "Oraculum",
    desc: "Oraculum is an academic Q&A platform for schools and colleges, combining AI assistance with verified teacher responses to make learning structured, reliable, and collaborative.",
    link: "https://oraculum.manishghimire01.com.np/",
    role: "Frontend Developer",
    year: "2025",
    stack: ["Next.js", "Tailwind", "AI"],
    type: "EdTech",
  },
  {
    slug: "random-country-explorer",
    Img: RCE,
    title: "Random Country Explorer",
    desc: "A playful, interactive country-discovery interface that surfaces a new place with each click. Built as a study in microinteractions and clean information density.",
    link: "https://icodethis.com/code/3102",
    role: "Designer & Developer",
    year: "2024",
    stack: ["React", "REST API"],
    type: "Concept",
  },
  {
    slug: "dice-game",
    Img: DG,
    title: "Dice Game",
    desc: "A two-player dice game with tight feedback loops and crisp interactions — a small experiment in motion and game UX.",
    link: "https://icodethis.com/code/3067",
    role: "Designer & Developer",
    year: "2024",
    stack: ["React", "CSS"],
    type: "Concept",
  },
  {
    slug: "api-data-table",
    Img: PT,
    title: "API Data Table",
    desc: "A sortable, searchable data table consuming a live API. A study in pagination, loading states, and empty states.",
    link: "https://icodethis.com/code/3170",
    role: "Developer",
    year: "2024",
    stack: ["React", "REST API"],
    type: "Tool",
  },
  {
    slug: "currency-converter-tool",
    Img: CCT,
    title: "Currency Converter Tool",
    desc: "A clean, fast currency converter pulling live exchange rates. Minimal interface, maximum clarity.",
    link: "https://icodethis.com/3200",
    role: "Developer",
    year: "2024",
    stack: ["React", "Exchange API"],
    type: "Tool",
  },
];

const ProjectPage = () => {
  const params = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === params.name);

  if (!project) return notFound();

  return (
    <section className="px-6 pb-20 pt-32 md:px-10 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => router.back()}
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
          className="mt-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-coral">
            {project.type} · {project.year}
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl break-words">
            {project.title}
          </h1>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-2xl border border-ink/10"
        >
          <Image
            src={project.Img}
            alt={project.title}
            width={1600}
            height={1000}
            className="aspect-[16/10] w-full object-cover"
            priority
          />
        </motion.div>

        {/* Body */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-1">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone">
                  Role
                </p>
                <p className="mt-2 font-display text-xl">{project.role}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone">
                  Year
                </p>
                <p className="mt-2 font-display text-xl">{project.year}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone">
                  Type
                </p>
                <p className="mt-2 font-display text-xl">{project.type}</p>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink/15 bg-cream-soft/60 px-3 py-1 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as const,
              delay: 0.1,
            }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
              Overview
            </p>
            <p className="mt-6 font-display text-2xl leading-[1.25] sm:text-3xl md:text-4xl break-words">
              {project.desc}
            </p>

            <div className="mt-12">
              <Link
                href={project.link}
                target="_blank"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-base text-cream transition-colors hover:bg-coral"
              >
                Visit live project
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
