// src/app/cart/page.tsx
"use client";
// import CartList from "@/features/cart/components/shared/CartList";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      {/* <CartList /> */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => router.push("/cart/address")}
          className="px-6 py-3 bg-army text-black rounded-md"
        >
          Proceed to Address
        </button>
      </div>
    </div>
  );
}
