"use client";

export default function SidebarLayout({
  children,
  onClickInside,
}: {
  children: React.ReactNode;
  onClickInside: (e: any) => void;
}) {
  return (
    <div
      className="w-[500px] h-full bg-[#111] p-6 text-white flex justify-between gap-10"
      onClick={onClickInside}
    >

      {children}
    </div>
  );
}
