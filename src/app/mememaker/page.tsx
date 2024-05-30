"use client";

import React, { useState, useEffect } from "react";
import "../i18n";

import MemeMaker from "@/components/home/mememaker";
import HeroMeme from "@/components/home/mememaker/HeroMeme";
import { navMenus } from "@/constants/navMenuConstants";

const MAX_VIEWPORT: number = 20;

function Home() {
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
      <HeroMeme canStick={triggerNav} triggerNav={triggerNav} menus={navMenus}>
        <MemeMaker />
      </HeroMeme>
    </>
  );
}

export default Home;
