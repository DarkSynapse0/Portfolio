"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className="font-display text-3xl leading-none tracking-tight"
          >
            Manish<span className="text-coral">.</span>
          </Link>

          <nav
            className={`hidden md:flex items-center gap-1 rounded-full border border-ink/10 px-2 py-1.5 transition-all duration-500 ${
              scrolled
                ? "bg-cream-soft/80 backdrop-blur-md shadow-[0_8px_30px_-10px_rgba(26,23,21,0.15)]"
                : "bg-transparent"
            }`}
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-4 py-1.5 text-sm tracking-wide"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      active ? "text-cream" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="https://drive.google.com/file/d/1qGVJYRLWOpj95Of0ICL9xwBevTsk62Rz/view?usp=sharing"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream-soft/60 px-4 py-2 text-sm tracking-wide backdrop-blur-md transition-all hover:border-ink hover:bg-ink hover:text-cream"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-coral pulse-dot" />
              Resume
            </Link>
          </div>

          <button
            className="md:hidden text-ink"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-cream/95 backdrop-blur-lg" />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative flex h-full flex-col items-start justify-center px-8 gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-5xl leading-tight"
                  >
                    {pathname === item.href && (
                      <span className="text-coral">— </span>
                    )}
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <Link
                  href="https://drive.google.com/file/d/1qGVJYRLWOpj95Of0ICL9xwBevTsk62Rz/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-base tracking-wide"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-coral pulse-dot" />
                  Resume
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
