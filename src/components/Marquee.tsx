"use client";
import React from "react";

interface MarqueeProps {
  items: string[];
  className?: string;
}

const Marquee = ({ items, className = "" }: MarqueeProps) => {
  const doubled = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 font-display text-5xl md:text-7xl text-ink/80"
          >
            <span>{item}</span>
            <span className="text-coral text-3xl md:text-5xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
