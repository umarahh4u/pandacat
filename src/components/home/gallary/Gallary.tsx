import React, { useEffect } from "react";

import {
  chakra,
  useColorMode,
  useColorModeValue,
  Flex,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import Reveal from "@/components/reveal";
import CustomImage from "@/components/Image";
import CustomButton from "@/components/Button";

const sampleItems = [
  "/img/vector1.svg",
  "/img/vector2.svg",
  "/img/vector3.svg",
  "/img/vector4.svg",
  "/img/vector5.svg",
  "/img/vector6.svg",
  "/img/vector7.svg",
  "/img/vector8.svg",
  "/img/vector9.svg",
  "/img/vector10.svg",
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

          {/* <Text
            sx={{
              bgGradient: "linear(to-r, #FEFFF7, #7CE94C))",
              bgClip: "text",
              color: "#7be94c",
              textShadow: `0px 0px 0 rgb(75,185,28),
            -1px 1px 0 rgb(28,138,0),
            -2px 2px 0 rgb(-20,90,0),
            -3px 3px 0 rgb(-68,42,0),
            -4px 4px  0 rgb(-116,-6,0),
            -5px 5px 4px rgba(24,87,9,0.43),
            -5px 5px 1px rgba(24,87,9,0.5),
            0px 0px 4px rgba(24,87,9,.2);`,
              fontSize: "4rem",
              fontFamily: "Chelsea Market",
              fontWeight: 400,
            }}
          >
            PANDA CAT MEMEMAKER
          </Text> */}
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
              }}
            >
              Create
            </Text>
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
      <Box
        sx={{
          w: "full",
          maxH: "28rem",
          // minH: "20rem",
          overflowY: "scroll",
          mx: "auto",
        }}
      >
        <SimpleGrid minChildWidth="250px" spacing="10px">
          {sampleItems &&
            sampleItems.length > 0 &&
            sampleItems.map((item, i) => (
              <Box
                sx={{
                  transform: "skew(-15deg)",
                }}
                key={`item_${i}`}
                maxH="244px"
                maxWidth={"320px"}
                borderRadius="5px"
                overflow="hidden"
              >
                <CustomImage src={item} width={320} height={210} fill />
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </chakra.div>
  );
}

export default Gallary;
