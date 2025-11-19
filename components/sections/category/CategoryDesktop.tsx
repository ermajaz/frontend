"use client";

import CategoryGrid from "./components/CategoryGrid";


export default function CategoryDesktop() {
  return (
    <section className="relative w-full bg-superblack py-12 px-6 text-white">
      <div className="container mx-auto">
        <CategoryGrid />
      </div>
    </section>
  );
}
