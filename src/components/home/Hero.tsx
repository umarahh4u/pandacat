"use client";

import React from "react";

import { chakra, Flex, useColorModeValue, Text, Box } from "@chakra-ui/react";
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
  const bg = useColorModeValue("#F2F2F2", "black");

  const maskWord = (word: any) => {
    // Check if word length is greater than 20
    if (word.length > 20) {
      // Extract first 20 characters and mask the rest
      const firstPart = word.substring(0, 20);
      // const remainingLength = word.length - 20;
      const maskedPart = ".".repeat(3);
      return firstPart + maskedPart;
    } else {
      // Word length is 20 or less, return it as it is
      return word;
    }
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
                mb={"3rem"}
                mt={{ base: "-2rem", md: "0" }}
              >
                <Text
                  textAlign={{ base: "left", md: "left" }}
                  fontFamily={"Inika"}
                  fontWeight={400}
                  fontSize={{ base: "1.2rem", md: "2rem" }}
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
            <CustomButton
              mr="1.81rem"
              w={{ base: "7rem", md: "10rem" }}
              h={{ base: "3rem", md: "3.5rem" }}
              fontWeight="medium"
            >
              <Text
                sx={{
                  textShadow: `0px 0px 0 rgb(182,185,180),
                   -1px 1px 0 rgb(128,131,126),
                   -2px 2px 0 rgb(75,78,73),
                   -3px 3px 0 rgb(21,24,19),
                   -4px 4px  0 rgb(-32,-29,0),
                   -5px 5px 4px rgba(3,10,1,0.56),
                   -5px 5px 1px rgba(3,10,1,0.5),
                   0px 0px 4px rgba(3,10,1,.2)`,
                  color: "white",
                  fontSize: { base: "1rem", md: "1.2rem" },
                }}
              >
                Buy $PC
              </Text>
            </CustomButton>

            <CustomButton
              mr="1.81rem"
              w={{ base: "7rem", md: "10rem" }}
              h={{ base: "3rem", md: "3.5rem" }}
              fontWeight="medium"
              variant={"gray"}
            >
              <Text
                sx={{
                  textShadow: `0px 0px 0 rgb(182,185,180),
                   -1px 1px 0 rgb(128,131,126),
                   -2px 2px 0 rgb(75,78,73),
                   -3px 3px 0 rgb(21,24,19),
                   -4px 4px  0 rgb(-32,-29,0),
                   -5px 5px 4px rgba(3,10,1,0.56),
                   -5px 5px 1px rgba(3,10,1,0.5),
                   0px 0px 4px rgba(3,10,1,.2)`,
                  color: "white",
                  fontSize: { base: "1rem", md: "1.2rem" },
                }}
              >
                Chart
              </Text>
            </CustomButton>
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
            maxW: "25rem",
            width: "100%",
            h: "3.5rem",
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
            overflow: "hidden",
          }}
        >
          <Text
            sx={{
              fontSize: ["0.7rem", "1rem"],
              fontWeight: 400,
              fontFamily: "Inika",
              color: "rgba(248, 248, 230, 1)",
            }}
          >
            {maskWord("CA:8HpGNw96EbNojdDLjLpPC6EQKXB4aYvzFzYPqdT4UNu1")}
          </Text>
          <CustomButton
            sx={{
              width: "8rem",
              height: { base: "3rem", md: "3rem" },
            }}
            variant={"gray"}
          >
            <Text
              sx={{
                textShadow: `0px 0px 0 rgb(182,185,180),
              -1px 1px 0 rgb(128,131,126),
              -2px 2px 0 rgb(75,78,73),
              -3px 3px 0 rgb(21,24,19),
              -4px 4px  0 rgb(-32,-29,0),
              -5px 5px 4px rgba(3,10,1,0.56),
              -5px 5px 1px rgba(3,10,1,0.5),
              0px 0px 4px rgba(3,10,1,.2)`,
                color: "white",
                fontSize: { base: "1rem", md: "1.2rem" },
              }}
            >
              Copy
            </Text>
          </CustomButton>
        </Box>
      </Flex>
    </chakra.div>
  );
};
