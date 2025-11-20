"use client";

import { Hotspot } from "../utils/bicycle-showcase";

export default function CustomHotspot({ hotspot }: { hotspot: Hotspot }) {
  return (
    <div
      className="absolute z-30"
      style={{
        left: `${hotspot.leftPct}%`,
        top: `${hotspot.topPct}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative">

        {/* + White Dot */}
        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-xl">
          <span className="text-black text-[14px] font-bold leading-none">+</span>
        </div>

        {/* First angled line */}
        <div
          className="absolute bg-white"
          style={{
            width: "50px",
            height: "2px",
            top: "-5px",
            left: "16px",
            transform: "rotate(-50deg)",
            transformOrigin: "left center",
          }}
        />

        {/* Second (straight) line */}
        <div
          className="absolute bg-white"
          style={{
            width: "170px",
            height: "2px",
            top: "-43px",
            left: "48px",
            transform: "rotate(0deg)",
            transformOrigin: "left center",
          }}
        />

        {/* Text block */}
        <div className="w-[250px] absolute left-[235px] top-[-70px]">
          <span className="w-full text-sm font-extrabold uppercase text-white tracking-wide leading-tight">
            {hotspot.title}
          </span>

          <p className="w-full text-xs text-white/90 mt-2 leading-snug">
            {hotspot.description}
          </p>
        </div>
      </div>
    </div>
  );
}
