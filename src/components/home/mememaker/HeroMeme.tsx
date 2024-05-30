import React from "react";
import { chakra } from "@chakra-ui/react";
import NavBar from "../NavBar";

interface IProps {
  menus: INav[];
  canStick: boolean;
  triggerNav: boolean;
  children: React.ReactNode;
}

export default function HeroMeme({ triggerNav, menus, children }: IProps) {
  return (
    <chakra.div
      id="home"
      //   height={{ base: "100vh", md: "100vh" }}
      w="full"
      pb="4rem"
      transition="background 0.2s"
      overflowY="scroll"
      position="relative"
      bgRepeat="no-repeat, no-repeat"
      bgSize="cover"
      bgImage="/img/herobg.webp"
      bgPosition="center"
    >
      <NavBar canStick={triggerNav} menus={menus} />
      {children}
    </chakra.div>
  );
}
