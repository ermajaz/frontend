"use client";

import Image from "next/image";
import { Hotspot } from "../utils/bicycle-showcase";

export default function BikeImage({
  bike,
  activeSpec,
}: {
  bike: any;
  activeSpec: any;
}) {
  return (
    <div className="relative w-full h-[650px] flex items-center justify-center overflow-visible">

      {/* Bike image wrapper */}
      <div className="relative w-full max-w-[1200px] h-[650px]">
        <Image
          src={bike.image}
          alt={bike.uiName}
          fill
          quality={100}
          className="object-contain z-10 pointer-events-none"
          priority
        />

        {/* Hotspots */}
        {(activeSpec.hotspots ?? []).map((hp: Hotspot) => (
          <HotspotMarker key={hp.id} hotspot={hp} />
        ))}
      </div>

      {/* Right side callout box */}
      <div className="absolute right-12 top-24 w-[300px] bg-black/40 p-4 rounded-md border border-white/10 backdrop-blur-sm">
        <h4 className="text-sm font-semibold">{activeSpec.label}</h4>
        <p className="text-xs text-white/80 mt-2 leading-relaxed">
          {activeSpec.content}
        </p>
      </div>
    </div>
  );
}

/* ---------------- HOTSPOT ------------------ */
function HotspotMarker({ hotspot }: { hotspot: Hotspot }) {
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
        {/* White dot */}
        <div className="w-4 h-4 bg-white rounded-full ring-2 ring-black shadow-md" />

        {/* Tooltip */}
        <div className="absolute left-full ml-3 min-w-[180px] bg-black/70 
                        -translate-y-1/2 text-white text-xs p-3 rounded 
                        border border-white/10 backdrop-blur-sm">
          <div className="font-semibold">{hotspot.title}</div>
          {hotspot.description && (
            <div className="text-[12px] mt-1 leading-snug">{hotspot.description}</div>
          )}
        </div>
      </div>
    </div>
  );
}
