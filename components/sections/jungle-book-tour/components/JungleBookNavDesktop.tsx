"use client";

export default function JungleBookNavDesktop({ destinations, activeIndex, onStoryClick }: any) {
  return (
    <div className="flex justify-between items-center h-[110px] px-10 bg-[#111] border-t border-white/10">
      <div className="flex flex-col w-[350px]">
        <h2 className="text-white text-[48px] font-bold">THE JUNGLE BOOK</h2>
        <p className="text-gray-300 text-xs">
          Your handbook of stories, routes, guides & adventure wisdom.
        </p>
      </div>

      <div className="flex gap-8 overflow-x-auto hide-scrollbar">
        {destinations.map((d: any, i: number) => (
          <div
            key={i}
            onClick={() => onStoryClick(i)}
            className="cursor-pointer text-center min-w-[120px]"
          >
            <span className={`uppercase text-[12px] font-medium ${i === activeIndex ? "text-sandstorm" : "text-gray-300"}`}>
              {d.title}
            </span>

            <span className={`block text-[11px] ${i === activeIndex ? "text-sandstorm" : "text-gray-500"}`}>
              {d.date}
            </span>

            {i === activeIndex && <div className="h-0.5 bg-sandstorm mt-1" />}
          </div>
        ))}
      </div>
    </div>
  );
}
