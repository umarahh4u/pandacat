import React, { useEffect } from "react";

import { chakra, Flex, Text, Box } from "@chakra-ui/react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import CustomImage from "@/components/Image";
import Reveal from "@/components/reveal";

function Footer() {
  const controls = useAnimation();
  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const services = [
    "Typesetting",
    "Lamination",
    "Binding",
    "Printing",
    "Online Registrations",
  ];

  return (
    <chakra.div
      id="services"
      height={{ base: "auto", md: "auto" }}
      w="full"
      bgImage={"/img/bgleaf.svg"}
      bgGradient={"linear(rgba(128, 140, 97, 1), rgba(1, 1, 1, 1))"}
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
        // bg={footerColorSwitch[colorMode]}
      >
        <Reveal width="100%">
          <Box
            sx={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <CustomImage
              src="/logo.webp"
              alt="panda cat logo"
              width={113}
              height={25}
              p="0.49px"
            />

            <Box>
              <Text>text</Text>
            </Box>
          </Box>
        </Reveal>
        {/* <Text>
          Copyright &copy; {new Date().getFullYear()} All rights reserved
        </Text> */}
      </Flex>
    </chakra.div>
  );
}

export default Footer;
