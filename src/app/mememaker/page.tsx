"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  chakra,
  Box,
  Text,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { CiFileOn } from "react-icons/ci";
import { IoIosCheckbox } from "react-icons/io";

import { navMenus } from "@/constants/navMenuConstants";
import NavBar from "@/components/home/NavBar";
import CustomImage from "@/components/Image";
import PandaCat from "@/constants/colorConstants";
import CustomButton from "@/components/Button";

const imageList = [
  {
    id: 1,
    url: "/img/mem1.png",
    checked: false,
  },
  {
    id: 2,
    url: "/img/mem2.png",
    checked: false,
  },
  {
    id: 3,
    url: "/img/mem3.png",
    checked: false,
  },
  {
    id: 4,
    url: "/img/mem4.png",
    checked: false,
  },
  {
    id: 5,
    url: "/img/mem5.png",
    checked: false,
  },
  {
    id: 6,
    url: "/img/mem6.png",
    checked: false,
  },
  {
    id: 7,
    url: "/img/mem1.png",
    checked: false,
  },
  {
    id: 8,
    url: "/img/mem2.png",
    checked: false,
  },
];

function page() {
  const [triggerNav, setTriggerNav] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [imageSelect, setImageSelect] = useState<any[]>([...imageList]);
  const [firstSTep, setFirstStep] = useState<boolean>(false);

  const handleGenerateMeme = () => {
    setFirstStep(true);
  };

  const handlePrevious = () => {
    setFirstStep(false);
  };

  const toggleSelectImage = (e: any, item: any) => {
    console.log("eee", e, "item", item);
    if (e.type === "click") {
      setImageSelect(
        imageSelect.map((d) =>
          d.id === item.id ? { ...d, checked: !item.checked } : d
        )
      );
    } else {
      setImageSelect(
        imageSelect.map((d) => {
          return { ...d, checked: false };
        })
      );
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    //  to avoid memory leaks, will run on unmount
    return () =>
      selectedFiles.forEach((file: any) => URL.revokeObjectURL(file?.preview));
  }, []);

  const onDrop = useCallback((acceptedFiles: any) => {
    setSelectedFiles(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  if (!mounted) return <></>;
  return (
    <chakra.div
      id="home"
      height={{ base: "100vh", md: "100vh" }}
      w="full"
      pb="4rem"
      transition="background 0.2s"
      overflowY="scroll"
      position="relative"
      bgRepeat="no-repeat, no-repeat"
      bgSize="cover"
      bgImage="/img/herobg.webp"
      bgPosition="center"
    >
      <NavBar canStick={triggerNav} menus={navMenus} />
      <Box
        sx={{
          maxW: "85rem",
          mt: "6.5rem",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            mx: ["1rem", "3rem", "4rem", "6rem"],
            borderRadius: "10px",
            boxShadow: "rgba(16, 24, 40, 0.08)",
            bg: "#31312B",
            p: "0.8rem",
          }}
        >
          <Text
            sx={{
              fontSize: { base: "1.3rem", md: "1.8rem" },
              fontWeight: 400,
              fontFamily: "Inika",
              lineHeight: "28px",
              color: "#FFFFFF",
              mb: "0.6rem",
            }}
          >
            {firstSTep === false ? " Panda Cat Meme Maker" : "Preview"}
          </Text>
          <Text
            sx={{
              fontSize: { base: "0.8rem", md: "1rem" },
              fontWeight: 400,
              fontFamily: "Inika",
              color: "#979696",
              mb: "1rem",
            }}
          >
            {firstSTep === false
              ? `Level up your crypto game with our meme-making platform. Creat
            irresistible content to shill memecoins like a pro.`
              : ""}
          </Text>
          {firstSTep === false ? (
            <Box
              sx={{
                borderRadius: "10px",
                border: "0.33px solid white",
                w: "100%",
                p: "1.5rem",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mb: "1.8rem",
                cursor: "pointer",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <Text
                  sx={{
                    fontSize: { base: "0.8rem", md: "1rem" },
                  }}
                >
                  Drop file here
                </Text>
              ) : (
                <>
                  {selectedFiles.length > 0 ? (
                    selectedFiles.map((file) => (
                      <>
                        <CustomImage
                          key={file && file?.name}
                          src={file?.preview}
                          width={147}
                          height={120}
                        />
                      </>
                    ))
                  ) : (
                    <>
                      <CiFileOn
                        color="white"
                        cursor={"pointer"}
                        fontSize="1.5rem"
                      />
                      <Text
                        sx={{
                          fontSize: { base: "0.8rem", md: "1rem" },
                          color: "#8D8D8D",
                          fontFamily: "Inika",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Text
                          as="span"
                          sx={{
                            color: "#9BDF6D",
                            fontWeight: 700,
                            fontFamily: "inherit",
                            fontSize: { base: "0.8rem", md: "1rem" },
                          }}
                        >
                          Click to upload
                        </Text>{" "}
                        or drag and drop <br /> PNG, JPG or JPEG (max. 2mb)
                      </Text>
                    </>
                  )}
                </>
              )}
            </Box>
          ) : (
            ""
          )}

          <Divider mb="1.2rem" />
          <Text
            sx={{
              fontSize: { base: "1.1rem", md: "1.25rem" },
              fontFamily: "Inika",
              lineHeight: "28px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "1rem",
            }}
          >
            {firstSTep === false ? " Select Meme Template" : ""}
          </Text>
          <Box
            sx={{
              w: "full",
              maxH: "20rem",
              minH: firstSTep ? "20rem" : "0",
              overflowY: "scroll",
              backgroundColor: firstSTep && "#2B2B26",
            }}
          >
            {firstSTep === false ? (
              <Grid
                templateColumns={{
                  base: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={2}
                w="100%"
                templateRows="repeat(2, 1fr)"
              >
                {imageSelect &&
                  imageSelect.length > 0 &&
                  imageSelect.map((image) => (
                    <GridItem
                      key={image.id}
                      sx={{
                        position: "relative",
                      }}
                      cursor={"pointer"}
                      onClick={(e: any) => toggleSelectImage(e, image)}
                      width={["180px", "200px", "220px", "289px"]}
                      height={["170px", "198px", "198px", "200px"]}
                    >
                      {image.checked === false ? (
                        <></>
                      ) : (
                        <Box
                          position="absolute"
                          right="10px"
                          top="10px"
                          zIndex={5}
                        >
                          <IoIosCheckbox
                            fontSize={"2.5rem"}
                            color={PandaCat.colorCheck}
                          />
                        </Box>
                      )}

                      <Image
                        src={image.url}
                        width={["180px", "200px", "211px", "289px"]}
                        height={["170px", "198px", "198px", "200px"]}
                        alt="images"
                      />
                    </GridItem>
                  ))}
              </Grid>
            ) : (
              ""
            )}
          </Box>
          <Divider mb="1.5rem" />
          <Flex
            justifyContent={`${
              firstSTep === true ? "space-between" : "flex-end"
            }`}
          >
            {!!firstSTep && (
              <CustomButton
                sx={{
                  alignSelf: "right",
                }}
                w={{ base: "8rem", md: "13rem" }}
                h={{ base: "3rem", md: "3.5rem" }}
                p="0.3rem"
                variant={"gray"}
                onClick={handlePrevious}
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
                    fontSize: { base: "0.8rem", md: "1.2rem" },
                  }}
                >
                  Back
                </Text>
              </CustomButton>
            )}

            <CustomButton
              sx={{
                alignSelf: "right",
              }}
              w={{ base: "8rem", md: "13rem" }}
              h={{ base: "3rem", md: "3.5rem" }}
              p="0.3rem"
              onClick={(e) => {
                e.preventDefault();
                handleGenerateMeme();
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
                  fontSize: { base: "0.8rem", md: "1.2rem" },
                }}
              >
                {firstSTep === false ? "Generate meme" : "Download"}
              </Text>
            </CustomButton>
          </Flex>
        </Box>
      </Box>
    </chakra.div>
  );
}

export default page;
