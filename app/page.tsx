import AboutRadkaat from "@/components/sections/about-radkaat";
import BicycleComparison from "@/components/sections/bicycle-comparison/BicycleComparison";
import BicycleRide from "@/components/sections/bicycle-ride/BicycleRide";
import Category from "@/components/sections/category";
import HeroSection from "@/components/sections/hero";

export default function LandingPage() {
  return (
    <div> landing page
      <HeroSection />
      {/* <BicycleShowcase /> */}
      <BicycleComparison />
      <BicycleRide />
      <Category />
      {/* <JungleBookTour /> */}
      <AboutRadkaat />
    </div>
  );
}
