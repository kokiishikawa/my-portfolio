"use client";

import Image from "next/image";
import { useEffect } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <span
        className="absolute top-5 right-8 text-white text-4xl font-light cursor-pointer hover:text-blue-500 transition-colors z-[1001]"
        onClick={onClose}
      >
        &times;
      </span>
      <div
        className="relative max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg animate-zoom-in"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      <div className="text-white text-center p-4 text-base">{alt}</div>
    </div>
  );
}
