"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-200 bg-superblack text-white flex flex-col"
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <Image src="/images/website-logo.png" alt="Radkaat" width={48} height={48} />
        <button onClick={onClose} className="p-2">
          <X size={40} />
        </button>
      </div>

      <div className="flex justify-center my-[10%] px-6">
        <SearchInput />
      </div>

      <SearchSuggestions />
    </div>
  );
}
