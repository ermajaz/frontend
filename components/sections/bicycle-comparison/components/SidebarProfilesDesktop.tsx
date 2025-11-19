"use client";

import { BikeProfile } from "@/types/bikeComparison";


export default function SidebarProfilesDesktop({
  profiles,
}: {
  profiles: BikeProfile[];
}) {
  return (
    <div className="w-80 bg-[#121212] p-3 py-10 flex flex-col gap-5 relative">
      {profiles.map((p, idx) => (
        <div
          key={p.title}
          className={`p-4 rounded-md cursor-pointer transition-all duration-300 shadow-md ${
            idx === 0
              ? "bg-sandstorm text-black shadow-xl"
              : "bg-transparent text-white"
          }`}
        >
          <span
            className={`text-sm font-extrabold ${
              idx === 0 ? "text-black" : "text-white"
            }`}
          >
            {p.title}
          </span>

          <p
            className={`text-xs mt-1.5 font-semibold ${
              idx === 0 ? "text-black/50" : "text-white/60"
            }`}
          >
            {p.level}
          </p>

          <p
            className={`mt-1.5 text-xs font-semibold ${
              idx === 0 ? "text-black/50" : "text-white/80"
            }`}
          >
            {p.description}
          </p>
        </div>
      ))}
    </div>
  );
}
