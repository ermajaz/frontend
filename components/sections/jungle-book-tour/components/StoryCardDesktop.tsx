"use client";

import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import MapContainer from "./MapContainer";
import CardImage from "./CardImage";

export default function StoryCardDesktop({ destination, isActive }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-120px", once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(destination.link, "_blank")}
      className={`relative w-full mx-auto h-[500px] cursor-pointer flex overflow-hidden rounded-xl shadow-2xl group transition-all duration-500 
                border ${isActive ? "bg-[#111] border-white/30" : "bg-black/20 border-white/10"}`}
    >
      <div className="flex-1 relative"><CardImage destination={destination} hovered={hovered} /></div>

      <div className="flex-1 relative"><MapContainer destination={destination} isInView={isInView} /></div>
    </div>
  );
}
