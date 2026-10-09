"use client";

import React, { useEffect, useState, useRef } from "react";

export default function MagicCursor() {
  const [enabled, setEnabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouseX = useRef(-100);
  const mouseY = useRef(-100);
  const ringX = useRef(-100);
  const ringY = useRef(-100);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      setEnabled(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("select") ||
          target.closest("[role='button']") ||
          target.getAttribute("data-interactive") === "true")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0)`;
      }

      // Smooth lerp for outer aura
      ringX.current += (mouseX.current - ringX.current) * 0.18;
      ringY.current += (mouseY.current - ringY.current) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!enabled || !visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Inner precise dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_12px_#06b6d4] transition-opacity duration-150 ${
          clicked ? "scale-150 bg-emerald-400" : ""
        }`}
      />

      {/* Outer magnetic glowing ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 rounded-full border border-cyan-400/40 backdrop-blur-[1px] transition-all duration-200 ease-out ${
          hovered
            ? "w-14 h-14 -ml-7 -mt-7 bg-cyan-400/15 border-cyan-400 scale-110 shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            : clicked
            ? "w-8 h-8 -ml-4 -mt-4 bg-emerald-400/20 border-emerald-400"
            : "w-10 h-10 bg-cyan-500/5"
        }`}
      />
    </div>
  );
}
