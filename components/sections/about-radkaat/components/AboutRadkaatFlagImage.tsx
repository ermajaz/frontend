"use client";

import Image from "next/image";

export default function AboutRadkaatFlagImage() {
  return (
    <div className="relative w-full lg:w-[44%] h-1/2 lg:h-full flag-img overflow-hidden">
      <Image
        quality={100}
        src="/videos/flag1.gif"
        alt="Radkaat Flag"
        fill
        className="object-cover object-[88%_12%]"
      />
    </div>
  );
}
