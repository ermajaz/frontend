"use client";

import Image from "next/image";

export default function AboutRadkaatMobileFlag() {
  return (
    <div className="absolute inset-0 flag-mobile-img overflow-hidden h-[65%]">
      <Image
        src="/videos/flag1.gif"
        alt="Radkaat Flag"
        fill
        priority
        quality={100}
        className="object-cover object-[70%_center] scale-[1.05] brightness-[0.9]"
      />
    </div>
  );
}
