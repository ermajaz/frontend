// src/app/cart/success/page.tsx
export default function CartSuccessPage() {
  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="text-3xl font-semibold mb-4">Thank you — Order placed!</h1>
      <p className="text-white/80 mb-6">We have sent order details to your email.</p>
      <a href="/orders" className="underline text-army">View Orders</a>
    </div>
  );
}
