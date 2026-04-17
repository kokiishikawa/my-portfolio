"use client";

import { useEffect, useState } from "react";

export function OpeningAnimation() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");

    const startFade = () => setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        document.documentElement.classList.remove("overflow-hidden");
      }, 600);
    }, 1000);

    if (document.readyState === "complete") {
      startFade();
    } else {
      window.addEventListener("load", startFade, { once: true });
      return () => window.removeEventListener("load", startFade);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8fafc] transition-opacity duration-[600ms] ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <span
        className="text-2xl font-light tracking-widest select-none italic"
        style={{ color: "#1e3a5f" }}
      >
        as a part of your calm
      </span>
    </div>
  );
}
