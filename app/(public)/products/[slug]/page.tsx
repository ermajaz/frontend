// src/app/(public)/products/[slug]/page.tsx
import { notFound } from "next/navigation";
// import ProductPage from "@/features/products/components/shared/ProductPage"; // your shared product page or create one

type Params = { params: { slug: string } };

const ALLOWED = ["serow", "saola", "takin"];

export default function ProductSlugPage({ params }: Params) {
  const { slug } = params;

  if (!ALLOWED.includes(slug)) {
    notFound(); // 404
  }

  // Optionally fetch product data here (server component) using your apiClient
  // return <ProductPage slug={slug} />;

  return <div>Product: {slug}</div>;
}
