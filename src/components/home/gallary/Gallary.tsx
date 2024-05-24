import React, { useEffect } from "react";

import {
  chakra,
  useColorMode,
  useColorModeValue,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";

{
  /* @ts-ignore */
}
import Carousel from "react-grid-carousel";

import Reveal from "@/components/reveal";
import CustomImage from "@/components/Image";
import CustomButton from "@/components/Button";

const sampleItems = [
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
  "/img/herobg.webp",
];

function Gallary() {
  const bg = useColorModeValue("#F2F2F2", "black");
  const { colorMode } = useColorMode();

  return (
    <chakra.div
      id="contact"
      height={{ base: "auto", md: "auto" }}
      w="full"
      bgGradient={"linear(rgba(0, 0, 0, 1), rgba(130, 142, 98, 1))"}
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
              fontSize: "1.6rem",
              lineHeight: "31.27px",
              color: "rgba(248, 248, 230, 1)",
              maxWidth: "45rem",
              textAlign: "center",
            }}
          >
            Create cute customized memes of Panda Cat to using our meme maker
          </Text>
          <CustomButton
            sx={{
              maxWidth: "13.6rem",
            }}
          >
            <Text>Create</Text>
          </CustomButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* <Text>Test</Text> */}
          </Box>
        </Flex>
      </Reveal>
      <Carousel
        rows={2}
        cols={6}
        gap={15}
        hideArrow={true}
        loop
        autoplay={1000}
      >
        {sampleItems &&
          sampleItems.length > 0 &&
          sampleItems.map((item, i) => (
            <Carousel.Item
              sx={{
                transform: "skew(-15deg)",
              }}
              key={`item_${i}`}
            >
              <Box
                sx={{
                  transform: "skew(-15deg)",
                  borderRadius: "5px",
                  overflow: "hidden",
                  width: "full",
                }}
              >
                <CustomImage src={item} width={289} height={210} fill />
              </Box>
            </Carousel.Item>
          ))}
      </Carousel>
    </chakra.div>
  );
}

export default Gallary;
