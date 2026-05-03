"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  Img: string | StaticImageData;
  title: string;
  desc: string;
  href: string;
  index: number;
  meta?: string;
}

const ProjectCard = ({
  Img,
  title,
  desc,
  href,
  index,
  meta,
}: ProjectCardProps) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <Link
        href={href}
        className="group block rounded-2xl border border-ink/10 bg-cream-soft/40 p-3 transition-all duration-500 hover:border-ink/25 hover:bg-cream-soft/80"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink/5">
          <Image
            src={Img}
            alt={title}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <span className="rounded-full bg-cream/80 backdrop-blur px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
              {num}
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/85 backdrop-blur transition-all duration-500 group-hover:bg-coral group-hover:text-cream">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>

        <div className="px-3 pb-3 pt-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl break-words min-w-0">
              {title}
            </h3>
            {meta && (
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                {meta}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed line-clamp-3">
            {desc}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
