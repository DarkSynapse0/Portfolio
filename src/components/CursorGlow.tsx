"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 150, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 150, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 240);
      y.set(e.clientY - 240);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[480px] w-[480px] rounded-full"
    >
      <div className="h-full w-full rounded-full bg-coral/15 blur-[120px]" />
    </motion.div>
  );
};

export default CursorGlow;
