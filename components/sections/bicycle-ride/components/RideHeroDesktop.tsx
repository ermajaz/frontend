"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function RideHeroDesktop() {
  const router = useRouter();

  return (
    <div className="relative w-full flex flex-col pt-10 pb-20 items-center justify-center overflow-hidden z-10 bg-superblack">
      {/* Background */}
      <Image
        src="/images/test-ride.jpg"
        alt="Bicycle Ride"
        fill
        priority
        quality={100}
        className="object-cover"
        style={{ scale: 1.45, objectPosition: "center 45%" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <div className="z-10 text-center flex flex-col items-center px-6 text-white">
        <h2 className="text-[50px] font-bold uppercase">
          Your Ride Begins <span className="text-sandstorm">Here</span>
        </h2>

        <p className="text-stone italic font-semibold text-[24px] mb-6">
          Explore. Climb. Conquer.
        </p>

        <Button
          onClick={() => router.push("/ride")}
          className="bg-sandstorm text-superblack rounded-none h-14 px-5 gap-2 text-[18px] font-semibold uppercase"
        >
          Start Riding <MoveRight />
        </Button>
      </div>
    </div>
  );
}
