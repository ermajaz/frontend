"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

export default function ProductsOverlay({
  onClose,
}: {
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 right-0 w-[400px] h-full z-200 bg-superblack text-white p-6 border-l border-white/10"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Products Menu</h3>
        <button onClick={onClose}>
          <X size={30} />
        </button>
      </div>

      <ul className="space-y-4 text-white/80">
        <li className="hover:text-white cursor-pointer">Mountain</li>
        <li className="hover:text-white cursor-pointer">City Bikes</li>
        <li className="hover:text-white cursor-pointer">Kids</li>
        <li className="hover:text-white cursor-pointer">Electric</li>
      </ul>
    </div>
  );
}
