"use client";

import { useState, useEffect } from "react";

import { Hero } from "@/components/home/Hero";
import { heroHeading } from "@/constants/heroTextConstants";
import { navMenus } from "@/constants/navMenuConstants";
import Gallary from "@/components/home/gallary";
import Footer from "@/components/home/footer";

const MAX_VIEWPORT: number = 10;

export default function Home() {
  const [triggerNav, setTriggerNav] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > MAX_VIEWPORT) {
      setTriggerNav(false);
    }

    if (currentScrollY < MAX_VIEWPORT) {
      setTriggerNav(true);
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
      <Hero
        menus={navMenus}
        canStick={triggerNav}
        triggerNav={triggerNav}
        heroText={heroHeading}
      />
      <Gallary />
      <Footer />
    </>
  );
}
