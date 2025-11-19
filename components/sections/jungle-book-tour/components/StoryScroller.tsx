"use client";

import StoryCardDesktop from "./StoryCardDesktop";
import StoryCardMobile from "./StoryCardMobile";


export default function StoryScroller({
  destinations,
  activeIndex,
  mobile,
}: {
  destinations: any[];
  activeIndex: number;
  mobile?: boolean;
}) {
  return (
    <>
      {destinations.map((item, index) => (
        <div key={item.id} className="snap-start shrink-0 w-full flex justify-center">
          {mobile ? (
            <StoryCardMobile destination={item} isActive={activeIndex === index} />
          ) : (
            <StoryCardDesktop destination={item} isActive={activeIndex === index} />
          )}
        </div>
      ))}
    </>
  );
}
