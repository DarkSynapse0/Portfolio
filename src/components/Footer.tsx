import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-black text-white py-6 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        {/* Left: Site Name & Intro */}
        <div>
          <h2 className="text-2xl font-bold">MG.</h2>
          <p className="text-sm text-gray-600 max-w-sm">
            A personal portfolio - showcasing projects,
            skills, and creativity.
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex space-x-4">
          <Link
            href="https://github.com/DarkSynapse0"
            target="_blank"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 transition-colors" />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 transition-colors" />
          </Link>
          <Link href="mailto:mannish079@gmail.com" aria-label="Email">
            <Mail className="w-5 h-5 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
