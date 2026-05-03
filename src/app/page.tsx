"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Marquee from "@/components/Marquee";
import MagneticButton from "@/components/MagneticButton";

const easeOut = [0.22, 1, 0.36, 1] as const;

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Node.js",
  "Figma",
];

const services = [
  {
    n: "01",
    title: "Frontend Engineering",
    body: "Building production-ready interfaces in React, Next.js, and TypeScript with a sharp eye for performance.",
  },
  {
    n: "02",
    title: "Interaction Design",
    body: "Crafting motion and micro-interactions that feel inevitable — not decorative — with Framer Motion.",
  },
  {
    n: "03",
    title: "Product Thinking",
    body: "Working alongside designers and product to ship features that earn their place in the codebase.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut, delay: i * 0.08 },
  }),
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen px-6 pb-20 pt-40 md:px-10 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.22em] text-stone flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-coral pulse-dot" />
            Available for work · 2026
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-8 font-display text-[3.25rem] leading-[0.92] tracking-tight sm:text-7xl md:text-[12vw] lg:text-[11rem] break-words"
          >
            Frontend
            <br />
            <span className="italic text-coral">developer</span>
            <br />
            <span className="text-stone">building thoughtfully.</span>
          </motion.h1>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="md:col-span-6 md:col-start-7 text-lg md:text-xl text-ink/80 leading-relaxed max-w-xl"
            >
              I&apos;m{" "}
              <span className="font-display italic text-ink">Manish</span>, a
              BCA student and frontend developer turning ideas into fast,
              well-crafted web experiences. Currently shipping interfaces for{" "}
              <span className="text-ink">Joopa Digital</span>.
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center gap-5"
          >
            <MagneticButton>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-base text-cream transition-colors hover:bg-coral"
              >
                View my work
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full border border-ink/20 px-7 py-4 text-base hover:border-ink"
              >
                About me
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-24 flex items-center gap-3 text-stone"
          >
            <ArrowDown size={16} className="animate-bounce" />
            <span className="font-mono text-xs uppercase tracking-[0.18em]">
              Scroll
            </span>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative overflow-hidden border-y border-ink/10 bg-cream-soft/40 py-10">
        <Marquee items={skills} />
      </section>

      {/* SERVICES */}
      <section className="relative px-6 py-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="grid grid-cols-1 gap-6 md:grid-cols-12"
          >
            <p className="md:col-span-3 font-mono text-xs uppercase tracking-[0.22em] text-stone">
              (02) What I do
            </p>
            <h2 className="md:col-span-9 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-7xl break-words">
              I help teams ship interfaces that feel
              <span className="italic text-coral"> considered</span> — not
              cobbled together.
            </h2>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-px md:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1] as const,
                  delay: i * 0.12,
                }}
                className="group relative bg-cream p-8 ring-1 ring-ink/10 transition-colors hover:bg-cream-soft"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-stone">{s.n}</span>
                  <span className="h-px w-8 bg-ink/15 transition-all duration-500 group-hover:w-16 group-hover:bg-coral" />
                </div>
                <h3 className="mt-10 font-display text-3xl leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-ink/70 leading-relaxed">{s.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="rounded-3xl border border-ink/10 bg-cream-soft/60 p-10 md:p-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
              (03) Selected work
            </p>
            <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <h3 className="font-display text-4xl leading-[1] sm:text-5xl md:text-7xl break-words">
                A small archive of
                <br />
                <span className="italic text-coral">things I&apos;ve built.</span>
              </h3>
              <MagneticButton>
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-3 rounded-full border border-ink px-7 py-4"
                >
                  Browse projects
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
