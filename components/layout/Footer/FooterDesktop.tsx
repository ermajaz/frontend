"use client";

import FooterBottomBar from "./components/FooterBottomBar";
import FooterContact from "./components/FooterContact";
import FooterHeading from "./components/FooterHeading";
import FooterImage from "./components/FooterImage";
import FooterMenu from "./components/FooterMenu";
import FooterSocials from "./components/FooterSocials";



export default function FooterDesktop() {
  return (
    <footer className="w-full text-white bg-superblack">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <FooterImage />

        <div className="flex flex-col justify-between pl-10 pt-10 pb-6 z-10">
          <FooterHeading />
          <FooterMenu />
          <FooterContact />
          <FooterSocials />
          <FooterBottomBar />
        </div>
      </div>
    </footer>
  );
}
