"use client";

import React, { useEffect, useState } from "react";

import {
  chakra,
  Flex,
  useColorModeValue,
  useColorMode,
  Text,
  Heading,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import CustomImage from "@/components/Image/CustomImage";
import NavBar from "@/components/home/NavBar";
import CustomButton from "../Button";
import Reveal from "../reveal";
// import PlayVideo from '../VideoModal/PlayVideo'

interface IProps {
  menus: INav[];
  canStick: boolean;
  triggerNav: boolean;
  heroText: {
    heading: string;
    paragraphFirst: string;
  };
}

export const Hero = ({ heroText, triggerNav, menus }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("#F2F2F2", "black");

  const handlePlayVideo = () => {
    onOpen();
  };

  return (
    <chakra.div
      id="home"
      height={{ base: "auto", md: "auto" }}
      w="full"
      bg={bg}
      pb="4rem"
      transition="background 0.2s"
      overflow="hidden"
      position="relative"
      bgRepeat="no-repeat, no-repeat"
      bgSize="cover"
      bgImage="/img/herobg.webp"
      bgPosition="center"
    >
      <NavBar canStick={triggerNav} menus={menus} />
      <Flex
        mx="auto"
        px={["1rem", "3rem", "4rem", "6rem"]}
        mt={{ base: "7rem", md: "8.5rem" }}
        alignItems="left"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "column" }}
        gap="2rem"
        columnGap="1rem"
        maxW="85rem"
        position={"relative"}
        h="full"
        borderRadius="40px"
        p="2.4rem"
      >
        <Flex flexDir="column" flex={4}>
          <Reveal>
            <Flex
              flexDirection="column"
              flexWrap="wrap"
              alignItems={{ base: "start", md: "start" }}
            >
              <CustomImage
                src="/img/PandaCat.svg"
                alt="Panda Cat Image"
                width={845}
                height={188}
              />
              <Box
                maxW={{ base: "container.sm", md: "31.25rem" }}
                textAlign={{ base: "start", md: "justify" }}
                fontSize={{ base: "1rem", md: "1.37rem" }}
                fontWeight={"medium"}
                mb="3.1rem"
              >
                <Text
                  textAlign={{ base: "left", md: "left" }}
                  fontFamily={"Inika"}
                  fontWeight={400}
                  fontSize={"2rem"}
                  color="#F8F8E6"
                >
                  The cutest cat on solana Network
                </Text>
              </Box>
            </Flex>
          </Reveal>

          <Flex
            alignItems="center"
            justifyContent={{ base: "start", md: "start" }}
            mb="5rem"
          >
            <ScrollLink
              to={"services"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <CustomButton
                mr="1.81rem"
                w="10rem"
                h="4rem"
                fontWeight="medium"
                fontSize={{ base: "0.8rem", md: "1rem" }}
              >
                <Text> Buy $PC</Text>
              </CustomButton>
            </ScrollLink>
            <ScrollLink
              to={"services"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <CustomButton
                mr="1.81rem"
                w="10rem"
                h="4rem"
                fontWeight="medium"
                fontSize={{ base: "0.8rem", md: "1rem" }}
                variant={"gray"}
              >
                <Text> Chart</Text>
              </CustomButton>
            </ScrollLink>
          </Flex>
        </Flex>
        <Flex
          display={{ base: "flex", md: "flex" }}
          flex={1}
          position={"relative"}
          justifyContent={"center"}
          alignItems="center"
          right={{ base: "0 ", md: "-2.4rem" }}
        ></Flex>

        <Box
          sx={{
            maxW: "31rem",
            width: "100%",
            h: "4rem",
            p: "1rem",
            display: "flex",
            gap: "11px",
            justifyContent: "space-between",
            alignSelf: "right",
            alignItems: "center",
            textAlign: "center",
            ml: "auto",
            border: "1px solid white",
            transform: "skew(-15deg)",
          }}
        >
          <Text
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              fontFamily: "Inika",
              color: "rgba(248, 248, 230, 1)",
            }}
          >
            8HpGNw96EbNojdDLjLpPC6EQK....
          </Text>
          <CustomButton
            sx={{
              width: "5rem",
              height: "3rem",
            }}
            variant={"gray"}
          >
            <Text>Copy</Text>
          </CustomButton>
        </Box>
      </Flex>
    </chakra.div>
  );
};
