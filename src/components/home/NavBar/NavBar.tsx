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
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import PandaCat from "@/constants/colorConstants";
import CustomButton from "@/components/Button";

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
      <DrawerContent>
        <DrawerBody
          bg={bg}
          display="flex"
          flexDir={"column"}
          pb={4}
          gap={3}
          w="full"
          justifyContent="center"
          alignItems={"center"}
          textAlign="center"
        >
          <Flex w="full" justifyContent={"right"} mr="5px">
            <CloseButton
              aria-label="Close menu"
              justifySelf="end"
              onClick={onCloseNav}
            />
          </Flex>
          {menus &&
            menus.length > 0 &&
            menus.map((menu) => (
              <Link
                href="/"
                h="1.5rem"
                key={menu.name}
                color={'rgba(248, 248, 230, 1)'}
                fontSize="1.25rem"
                fontWeight="400"
                _hover={{ color: "primaryDark" }}
                _focus={{ boxShadow: "none" }}
              >
                <ScrollLink
                  to={menu.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={onCloseNav}
                >
                  {menu.name}
                </ScrollLink>
              </Link>
            ))}
          <Divider />
          <Button
            // color={basicTextColor[colorMode]}
            variant={"outline"}
            border="1px solid black"
            padding="10px"
            px="15px"
            size="sm"
            fontWeight="400"
            _hover={{
              color: PandaCat.primary,
              transition: "color .2s",
            }}
            borderRadius="10px 0px 10px 10px"
          >
            Buy $PC
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
  return (
    <chakra.header
      ref={ref}
      transition="all .3s ease-in-out"
      bg={canStick ? "transparent" : 'transparent'}
      w={"full"}
      ml="auto"
      position={"fixed"}
      zIndex={20}
      py='1rem'
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
                  width={"207px"}
                  height={"68px"}
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
                  href="/"
                  h="1.5rem"
                  key={menu.name}
                  color={'rgba(248, 248, 230, 1)'}
                  _notLast={{ mr: "2.5rem" }}
                  fontSize="1.25rem"
                  fontWeight="normal"
                  fontFamily={'Chelsea Market'}
                  _hover={{ color: "primaryDark" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <ScrollLink
                    to={menu.id}
                    href={menu.path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    {menu.name}
                  </ScrollLink>
                </Link>
              ))}
          </Flex>
          <Flex align="center" color="gray.400">
            {menus && menus.length > 0 && (
              <HStack spacing="5" display={["none", "none", "flex", "flex"]}>
                <CustomButton width={'200px'}>
                 <Text  fontSize={'1.5rem'} letterSpacing={'-3.5%'} color='rgba(254, 253, 251, 1)'   fontFamily={'Lilita One'} 
                 textShadow={'rgba(16, 46, 11, 1)'}
                 dropShadow={'rgba(16, 46, 11, 1)'}
                 transform={'skew(15deg)'}
                 > Buy $PC</Text>
                </CustomButton>
              </HStack>
            )}
            
            {menus && menus.length > 0 && (
              <IconButton
                display={["flex", "flex", "none", "none"]}
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
