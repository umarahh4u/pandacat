import React, { useEffect } from "react";

import {
  chakra,
  useColorMode,
  useColorModeValue,
  Flex,
  Text,
  Box,
  AspectRatio,
} from "@chakra-ui/react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Reveal from "@/components/reveal";
import CustomImage from "@/components/Image";

function Gallary() {
  const bg = useColorModeValue("#F2F2F2", "black");
  const { colorMode } = useColorMode();

  return (
    <chakra.div
      id="contact"
      height={{ base: "auto", md: "auto" }}
      w="full"
      bgGradient={"linear(rgba(0, 0, 0, 1), rgba(130, 142, 98, 1))"}
      pb="4rem"
      transition="background 0.2s"
      overflowY="hidden"
      position="relative"
      bgRepeat="no-repeat, no-repeat"
      bgSize="cover"
      bgPosition="center right, top left 45px"
    >
      <Reveal width="100%">
        <Flex
          mx="auto"
          px={["1rem", "3rem", "4rem", "6rem"]}
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "column" }}
          columnGap="1rem"
          maxW="75rem"
          position={"relative"}
          h="full"
          p="2.4rem"
          mt="3.5rem"
          gap="2rem"
        >
          <CustomImage
            src="/img/pandamaker.svg"
            width={810}
            height={103}
            alt="Panda Cat Mememaker"
          />
          <Text
            sx={{
              fontFamily: "Inika",
              fontWeight: 400,
              fontSize: "1.",
            }}
          >
            Create cute customized memes of Panda Cat to using our meme maker
          </Text>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text>Test</Text>
          </Box>
        </Flex>
      </Reveal>
    </chakra.div>
  );
}

export default Gallary;
