// src/app/(dashboard)/orders/[id]/page.tsx
import { notFound } from "next/navigation";

type Params = { params: { id: string } };

export default function OrderDetails({ params }: Params) {
  const { id } = params;
  if (!id) notFound();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Order #{id}</h1>
      {/* fetch order details with apiClient or axiosInstance */}
    </div>
  );
}
