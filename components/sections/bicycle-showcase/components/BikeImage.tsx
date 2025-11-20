"use client";

import Image from "next/image";
import { Hotspot } from "../utils/bicycle-showcase";
import CustomHotspot from "./CustomHotspot";

export default function BikeImage({
  bike,
  activeSpec,
}: {
  bike: any;
  activeSpec: any;
}) {
  return (
    <div className="relative w-full h-[650px] flex items-center justify-center overflow-visible">
      {/* Bike Image Wrapper */}
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
          <CustomHotspot key={hp.id} hotspot={hp} />
        ))}
      </div>
    </div>
  );
}
