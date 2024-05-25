import React, { useEffect } from "react";

import { chakra, Flex, Box } from "@chakra-ui/react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaXTwitter } from "react-icons/fa6";

import { FaTelegramPlane } from "react-icons/fa";

import CustomImage from "@/components/Image";
import Reveal from "@/components/reveal";

function Footer() {
  const controls = useAnimation();
  const { inView, ref } = useInView();

  const language = process.env.PANDA_CAT_LANG;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <chakra.div
      id="services"
      height={{ base: "auto", md: "auto" }}
      w="full"
      bgImage={"/img/bgleaf.svg"}
      pb={{ base: "0", md: "2rem" }}
      transition="background 0.2s"
      overflowY="hidden"
      position="relative"
      bgRepeat="no-repeat, no-repeat"
      bgSize="cover"
      bgPosition="center right, top left 45px"
      as={motion.div}
      animate={controls}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <chakra.div
        sx={{
          bgGradient: "linear(rgba(128, 140, 97, 1), rgba(1, 1, 1, 1))",
          bgSize: "cover",
          w: "full",
          opacity: 0.8,
          position: "absolute",
          height: "100%",
        }}
      ></chakra.div>
      <Flex
        mx="auto"
        alignItems="center"
        mt="1.5rem"
        justifyContent="space-between"
        flexDirection="column"
        columnGap="1rem"
        maxW="85rem"
        position={"relative"}
        h="full"
        borderRadius={{ base: "30px 30px 0 0", md: "40px" }}
        p="1.5rem"
        px="2.5rem"
      >
        <Reveal width="100%">
          <Box
            sx={{
              width: "100%",
              justifyContent: [
                "center",
                "space-between",
                "space-between",
                "space-between",
              ],
              alignItems: "center",
              display: "flex",
              flexDirection: ["column", "row", "row", "row"],
            }}
          >
            <CustomImage
              src={
                language === "EN"
                  ? "/img/PandaCat.svg"
                  : "/img/pandacatchina.svg"
              }
              alt="panda cat logo"
              width={113}
              height={25}
              p="0.49px"
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                maxW: "3rem",
              }}
            >
              <FaXTwitter cursor="pointer" color="white" fontSize={"1.5rem"} />
              <FaTelegramPlane
                cursor="pointer"
                color="white"
                fontSize={"1.5rem"}
              />
            </Box>
          </Box>
        </Reveal>
      </Flex>
    </chakra.div>
  );
}

export default Footer;
