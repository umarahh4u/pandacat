import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  chakra,
  HStack,
  Link,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  Button,
  useColorMode,
  Divider,
  Menu,
  Image,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
  Box,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import CustomButton from "@/components/Button";
import CustomImage from "@/components/Image";

type Menu = {
  id: string;
  name: string;
  path: string;
  type: string;
};

interface IProps {
  menus: Menu[];
  canStick: boolean;
}

const NavBar = ({ menus, canStick }: IProps) => {
  const { toggleColorMode: toggleMode, colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenNav,
    onOpen: onOpenNav,
    onClose: onCloseNav,
  } = useDisclosure();

  const [help, setHelp] = useState<any>(false);
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "black");
  const ref = React.useRef<any>();

  const handleHelpModal = () => {
    setHelp(true);
    onOpen();
    onCloseNav();
  };

  const cl = useColorModeValue("gray.800", "white");
  const router = useRouter();

  const MobileNavContent = (
    <Drawer placement={"top"} onClose={onCloseNav} isOpen={isOpenNav}>
      <DrawerOverlay />
      <DrawerContent bg="transparent">
        <Flex
          w="full"
          h="4rem"
          justifyContent={"space-between"}
          alignItems={"center"}
          mr="5px"
          bg="transparent"
          px="2.5rem"
        >
          <CustomImage src="/img/PandaCat.svg" width={110} height={39} />
          <CloseButton
            aria-label="Close menu"
            justifySelf="end"
            color="white"
            onClick={onCloseNav}
          />
        </Flex>
        <DrawerBody
          bg={"#010101"}
          display="flex"
          flexDir={"column"}
          pb={4}
          gap={3}
          w="full"
          justifyContent="center"
          alignItems={"center"}
          textAlign="center"
          pt="1rem"
          borderRadius={"10px"}
        >
          {menus &&
            menus.length > 0 &&
            menus.map((menu) => (
              <Box
                key={menu.name}
                sx={{
                  w: "100%",
                }}
              >
                <Link
                  // href="/"
                  h="1.5rem"
                  color={"rgba(248, 248, 230, 1)"}
                  fontSize="1.25rem"
                  fontWeight="400"
                  fontFamily={"Chelsea Market"}
                  _hover={{ color: "primaryDark" }}
                  _focus={{ boxShadow: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(menu.path);
                  }}
                >
                  {menu.name}
                </Link>
                <Divider
                  sx={{
                    w: "full",
                    mb: "1rem",
                    mt: "0.3rem",
                  }}
                />
              </Box>
            ))}

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
              Buy $PC
            </Text>
          </CustomButton>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
  return (
    <chakra.header
      ref={ref}
      transition="all .3s ease-in-out"
      bg={canStick ? "transparent" : "transparent"}
      w={"full"}
      ml="auto"
      position={"fixed"}
      zIndex={20}
      py="1rem"
    >
      <chakra.div h="5rem" transition="all 1s ease-in-out" mx="auto" w="full">
        <Flex
          h="full"
          w="full"
          alignItems="center"
          justifyContent="space-between"
          px={["1rem", "2rem", "2rem", "6rem"]}
        >
          <Flex align="flex-start" role="group">
            <Link
              href="/"
              _groupHover={{
                textDecoration: "none",
              }}
            >
              <HStack>
                <Image
                  src="/logo.webp"
                  alt="panda cat logo"
                  width={{ base: "150px", md: "207px" }}
                  height={{ base: "40px", md: "68px" }}
                  padding="11px, 0px, 11px, 0px"
                />
              </HStack>
            </Link>
          </Flex>
          <Flex
            display={["none", "none", "flex", "flex"]}
            flexWrap="wrap"
            alignItems={"center"}
          >
            {menus &&
              menus.length > 0 &&
              menus.map((menu) => (
                <Link
                  // href={menu.path}
                  h="1.5rem"
                  key={menu.name}
                  color={"rgba(248, 248, 230, 1)"}
                  _notLast={{ mr: "2.5rem" }}
                  fontSize="1.25rem"
                  fontWeight="normal"
                  fontFamily={"Chelsea Market"}
                  _hover={{ color: "primaryDark" }}
                  _focus={{ boxShadow: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(menu.path);
                  }}
                >
                  {menu.name}
                </Link>
              ))}
          </Flex>
          <Flex align="center" color="gray.400">
            {menus && menus.length > 0 && (
              <HStack spacing="5" display={["none", "none", "flex", "flex"]}>
                <CustomButton
                  w={{ base: "7rem", md: "10rem" }}
                  h={{ base: "3rem", md: "3.5rem" }}
                >
                  <Text
                    fontSize={{ base: "1.2rem", md: "1.5rem" }}
                    letterSpacing={"-3.5%"}
                    color="rgba(254, 253, 251, 1)"
                    fontFamily={"Lilita One"}
                    transform={"skew(15deg)"}
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
                    {" "}
                    Buy $PC
                  </Text>
                </CustomButton>
              </HStack>
            )}

            {menus && menus.length > 0 && (
              <IconButton
                display={["flex", "flex", "none", "none"]}
                color="white"
                aria-label="Open menu"
                fontSize="20px"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={onOpenNav}
              />
            )}
          </Flex>
        </Flex>
        {MobileNavContent}
      </chakra.div>
    </chakra.header>
  );
};

export default NavBar;
