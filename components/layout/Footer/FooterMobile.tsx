"use client";

import FooterBottomBar from "./components/FooterBottomBar";
import FooterContact from "./components/FooterContact";
import FooterHeading from "./components/FooterHeading";
import FooterMenu from "./components/FooterMenu";
import FooterSocials from "./components/FooterSocials";



export default function FooterMobile() {
  return (
    <footer className="w-full text-white bg-superblack px-6 py-10 flex flex-col gap-10">
      <FooterHeading />
      <FooterMenu />
      <FooterContact />
      <FooterSocials />
      <FooterBottomBar />
    </footer>
  );
}
