"use client";

export default function NavGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-1/2">
      <span className="text-sandstorm text-lg font-bold">{title}</span>
      <div className="flex flex-col mt-4 gap-1">{children}</div>
    </div>
  );
}
