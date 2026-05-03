"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 mt-32 border-t border-ink/10 bg-cream-soft/40 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">
            (01) Get in touch
          </p>
          <h2 className="mt-6 font-display text-[3rem] leading-[0.98] tracking-tight sm:text-6xl md:text-8xl lg:text-[10rem] break-words">
            Let&apos;s build
            <br />
            <span className="italic text-coral">something</span> together.
          </h2>

          <Link
            href="/contact"
            className="group mt-12 inline-flex items-center gap-3 text-xl sm:text-2xl md:text-3xl break-all"
          >
            <span className="underline-grow">Open the contact form</span>
            <ArrowUpRight
              size={28}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-coral"
            />
          </Link>
        </motion.div>

        <div className="hairline mt-20" />

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-display text-2xl">
              Manish Ghimire<span className="text-coral">.</span>
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone">
              Frontend developer · Based in Nepal
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              {
                href: "https://github.com/DarkSynapse0",
                label: "GitHub",
                Icon: Github,
              },
              {
                href: "https://www.linkedin.com/in/manish-ghimire-b90894286/",
                label: "LinkedIn",
                Icon: Linkedin,
              },
              { href: "mailto:mannish079@gmail.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                aria-label={label}
                className="group flex items-center gap-2 text-sm tracking-wide text-stone hover:text-ink transition-colors"
              >
                <Icon size={16} />
                <span className="underline-grow">{label}</span>
              </Link>
            ))}
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone">
            © {new Date().getFullYear()} — All rights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
