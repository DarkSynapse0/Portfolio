"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { abrilFatface, josefinSlab } from "./Fonts";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "mailto:mannish079@gmail.com", label: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      className={`${
        josefinSlab.className
      } fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/40 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-5 px-6 md:px-10 border-b">
        <Link
          className={`${abrilFatface.className} text-3xl font-extrabold text-black`}
          href="/"
        >
          MG.
        </Link>

        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`tracking-wider text-xl hover:text-black transition-all ${
                  pathname === item.href
                    ? "text-black underline"
                    : "text-gray-500"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://drive.google.com/file/d/1qGVJYRLWOpj95Of0ICL9xwBevTsk62Rz/view?usp=sharing"
              className="tracking-wider text-xl rounded-3xl border border-black py-2 px-4 hover:bg-black hover:text-white hover:px-5 transition-all"
            >
              View Resume
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:hidden bg-white py-5 px-6 pb-5 shadow-md"
        >
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block text-lg hover:text-black ${
                    pathname === item.href
                      ? "text-black underline"
                      : "text-gray-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://drive.google.com/file/d/1qGVJYRLWOpj95Of0ICL9xwBevTsk62Rz/view?usp=sharing"
                className="block text-lg rounded-3xl border border-black py-2 px-4 hover:bg-black hover:text-white transition-all"
                onClick={() => setMenuOpen(false)}
              >
                View Resume
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavBar;
