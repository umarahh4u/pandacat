"use client";

import "./i18n";
import { useState, useEffect } from "react";

import { Hero } from "@/components/home/Hero";
import { navMenus } from "@/constants/navMenuConstants";
import Gallary from "@/components/home/gallary";
import Footer from "@/components/home/footer";
// import LanguageContextProvider from "src/contexts";

const MAX_VIEWPORT: number = 10;

export default function Home() {
  const [triggerNav, setTriggerNav] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > MAX_VIEWPORT) {
      setTriggerNav(true);
    }

    if (currentScrollY < MAX_VIEWPORT) {
      setTriggerNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerNav]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <>
      {/* <LanguageContextProvider> */}
      <Hero menus={navMenus} canStick={triggerNav} triggerNav={triggerNav} />
      <Gallary />
      <Footer />
      {/* </LanguageContextProvider> */}
    </>
  );
}
