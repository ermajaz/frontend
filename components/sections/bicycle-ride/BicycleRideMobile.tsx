"use client";

import RideHeroMobile from "./components/RideHeroMobile";
import RideStepsMobile from "./components/RideStepsMobile";



export default function BicycleRideMobile() {
  return (
    <section className="relative w-full bg-superblack overflow-hidden">
      <RideHeroMobile />
      <RideStepsMobile />
    </section>
  );
}
