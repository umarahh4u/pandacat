"use client";

import React, { useState, useEffect, useCallback } from "react";
import { chakra, Box, Text, Divider, SimpleGrid, Flex } from "@chakra-ui/react";
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
    url: "/img/herobg.webp",
    checked: false,
  },
  {
    id: 2,
    url: "/img/herobg.webp",
    checked: false,
  },
  {
    id: 3,
    url: "/img/herobg.webp",
    checked: false,
  },
  {
    id: 4,
    url: "",
    checked: false,
  },
  {
    id: 5,
    url: "",
    checked: false,
  },
  {
    id: 6,
    url: "",
    checked: false,
  },
  {
    id: 7,
    url: "",
    checked: false,
  },
  {
    id: 8,
    url: "",
    checked: false,
  },
  {
    id: 9,
    url: "",
    checked: false,
  },
];

function page() {
  const [triggerNav, setTriggerNav] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [imageSelect, setImageSelect] = useState<any[]>([...imageList]);

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
      height={{ base: "auto", md: "auto" }}
      w="full"
      pb="4rem"
      transition="background 0.2s"
      overflowY="hidden"
      position="relative"
      bgRepeat="no-repeat, no-repeat"
      bgSize="cover"
      bgImage="/img/herobg.webp"
      bgPosition="center right, top left 45px"
    >
      <NavBar canStick={triggerNav} menus={navMenus} />
      <Box
        sx={{
          maxW: "85rem",
          // w: "100%",
          mt: "6.5rem",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            // w: "full",
            mx: ["1rem", "3rem", "4rem", "6rem"],
            borderRadius: "10px",
            boxShadow: "rgba(16, 24, 40, 0.08)",
            bg: "#31312B",
            p: "0.8rem",
          }}
        >
          <Text
            sx={{
              fontSize: "2rem",
              fontWeight: 400,
              fontFamily: "Inika",
              lineHeight: "28px",
              color: "#FFFFFF",
              mb: "0.6rem",
            }}
          >
            Panda Cat Meme Maker
          </Text>
          <Text
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              fontFamily: "Inika",
              color: "#979696",
              mb: "1rem",
            }}
          >
            Level up your crypto game with our meme-making platform. Create
            irresistible content to shill memecoins like a pro.
          </Text>
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
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <Text>Drop file here</Text>
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
                        // onLoad={() => {
                        //   URL.revokeObjectURL(selectedFiles[0]?.preview);
                        // }}
                      />
                    </>
                  ))
                ) : (
                  <>
                    <CiFileOn fontSize={"2rem"} color="white" />
                    <Text
                      sx={{
                        fontSize: "1rem",
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

          <Divider mb="1.2rem" />
          <Text
            sx={{
              fontSize: "1.25rem",
              fontFamily: "Inika",
              lineHeight: "28px",
              fontWeight: 400,
              color: "#FFFFFF",
              mb: "1rem",
            }}
          >
            Select Meme Template
          </Text>
          <Box
            sx={{
              w: "full",
              maxH: "20rem",
              overflowY: "scroll",
            }}
          >
            <SimpleGrid minChildWidth="250px" spacing="15px">
              {imageSelect &&
                imageSelect.length > 0 &&
                imageSelect.map((image) => (
                  <Box
                    key={image.id}
                    sx={{
                      position: "relative",
                    }}
                    cursor={"pointer"}
                    onClick={(e: any) => toggleSelectImage(e, image)}
                  >
                    {image.checked === false ? (
                      <></>
                    ) : (
                      <Box
                        position="absolute"
                        right="30px"
                        top="10px"
                        zIndex={5}
                      >
                        <IoIosCheckbox
                          fontSize={"2.5rem"}
                          color={PandaCat.colorCheck}
                        />
                      </Box>
                    )}

                    <CustomImage
                      src={image.url}
                      width={250}
                      height={80}
                      alt="images"
                    />
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
          <Divider mb="1.5rem" />
          <Flex justify="flex-end">
            <CustomButton
              sx={{
                maxW: "13rem",
                alignSelf: "right",
              }}
            >
              Generate meme
            </CustomButton>
          </Flex>
        </Box>
      </Box>
    </chakra.div>
  );
}

export default page;
