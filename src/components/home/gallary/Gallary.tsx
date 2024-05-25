import React from "react";

import {
  chakra,
  Flex,
  Text,
  Box,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

import Reveal from "@/components/reveal";
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
          <Image
            src="/img/pandamaker.svg"
            width={{ base: 450, md: 810 }}
            height={{ base: 90, md: 103 }}
            alt="Panda Cat Mememaker"
            sx={{
              mb: "-1rem",
            }}
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
              fontSize: ["2rem", "4rem"],
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
              fontSize: { base: "1.1rem", md: "1.6rem" },
              lineHeight: "31.27px",
              color: "rgba(248, 248, 230, 1)",
              maxWidth: "45rem",
              textAlign: "center",
              mt: { base: "-1rem", md: "0" },
            }}
          >
            Create cute customized memes of Panda Cat to using our meme maker
          </Text>
          <CustomButton
            w={{ base: "7rem", md: "10rem" }}
            h={{ base: "3rem", md: "3.5rem" }}
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
              Create
            </Text>
          </CustomButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          ></Box>
        </Flex>
      </Reveal>
      <Box
        sx={{
          w: "full",
          overflowY: "scroll",
          overfloX: "scroll",
          mx: "auto",
        }}
      >
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={2}
          w="100%"
          templateRows="repeat(2, 1fr)"
        >
          {sampleItems &&
            sampleItems.length > 0 &&
            sampleItems.map((item, i) => (
              <GridItem
                sx={{
                  transform: "skew(-15deg)",
                }}
                key={`item_${i}`}
                w={["135px", "135px", "244px", "289px"]}
                h={["114px", "114px", "244px", "244px"]}
                borderRadius="5px"
                overflow="hidden"
              >
                <Image
                  src={item}
                  w={["135px", "135px", "244px", "289px"]}
                  h={["114px", "114px", "244px", "244px"]}
                  alt="pandas images"
                  transform={"skew(15deg)"}
                />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </chakra.div>
  );
}

export default Gallary;
