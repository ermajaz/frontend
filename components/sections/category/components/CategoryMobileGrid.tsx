"use client";

import { ourProducts } from "@/utils/category";
import CategoryMobileTile from "./CategoryMobileTile";


export default function CategoryMobileGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      {ourProducts?.map((product) => (
        <CategoryMobileTile key={product.id} product={product} />
      ))}
    </div>
  );
}
