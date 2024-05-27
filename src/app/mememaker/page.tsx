"use client";
//@ts-nocheck
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Rnd } from "react-rnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  chakra,
  Box,
  Text,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image as Images,
  Container,
} from "@chakra-ui/react";
import "../i18n";
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

/* @ts-ignore */

const DraggableImage = ({ src, rotation, onMouseDown }) => {
  return (
    <img
      src={src}
      alt="Default"
      style={{
        cursor: "move",
        width: "100%",
        height: "100%",
        transform: `rotate(${rotation}deg)`,
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      draggable={false} // Prevents default drag behavior
    />
  );
};

/* @ts-ignore */
function page() {
  const [triggerNav, setTriggerNav] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [imageSelect, setImageSelect] = useState<any[]>([...imageList]);
  const [firstSTep, setFirstStep] = useState<boolean>(false);
  const [imageBg, setImageBg] = useState<any[]>();
  const { t, i18n } = useTranslation();

  const [defaultImage] = useState("/cat.png");
  const [uploadedImage, setUploadedImage] = useState();
  const [uploadedImageSize, setUploadedImageSize] = useState({
    width: 0,
    height: 0,
  });
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [initialAngle, setInitialAngle] = useState(0);
  const [startAngle, setStartAngle] = useState(0);
  const canvasRef = useRef(null);

  const handleImageLoad = (e: any) => {
    const { naturalWidth, naturalHeight } = e.target;
    const aspectRatio = naturalWidth / naturalHeight;

    const maxWidth = window.innerWidth * 0.9;
    const maxHeight = window.innerHeight * 0.8;

    let width = naturalWidth;
    let height = naturalHeight;

    if (width > maxWidth || height > maxHeight) {
      if (width / maxWidth > height / maxHeight) {
        width = maxWidth;
        height = width / aspectRatio;
      } else {
        height = maxHeight;
        width = height * aspectRatio;
      }
    }

    setUploadedImageSize({ width, height });
  };

  const handleMouseDown = (e: any) => {
    // e.preventDefault(); // Prevents default mouse down behavior
    setIsRotating(false); // Stop rotation if any
  };

  const handleRotationStart = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRotating(true);
    const centerX = position.x + size.width / 2;
    const centerY = position.y + size.height / 2;
    const mouseX = e.clientX || (e.touches && e.touches[0].clientX);
    const mouseY = e.clientY || (e.touches && e.touches[0].clientY);
    const angle =
      Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
    setStartAngle(angle);
    setInitialAngle(rotation);
  };

  const updateRotation = useCallback(
    (mouseX: any, mouseY: any) => {
      const centerX = position.x + size.width / 2;
      const centerY = position.y + size.height / 2;
      const angle =
        Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
      const newRotation = initialAngle + (angle - startAngle);
      setRotation(newRotation);
    },
    [initialAngle, position.x, position.y, size.height, size.width, startAngle]
  );

  const handleMouseMove = useCallback(
    (e: any) => {
      if (isRotating) {
        const mouseX = e.clientX || (e.touches && e.touches[0].clientX);
        const mouseY = e.clientY || (e.touches && e.touches[0].clientY);
        requestAnimationFrame(() => updateRotation(mouseX, mouseY));
      }
    },
    [isRotating, updateRotation]
  );

  const handleMouseUp = (e: any) => {
    e.preventDefault(); // Prevents default mouse up behavior
    setIsRotating(false);
  };

  useEffect(() => {
    if (isRotating) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isRotating, handleMouseMove]);

  const downloadBlendedImage = () => {
    const canvas = canvasRef.current;
    /* @ts-ignore */
    const context = canvas.getContext("2d");

    /* @ts-ignore */
    canvas.width = uploadedImageSize.width;
    /* @ts-ignore */
    canvas.height = uploadedImageSize.height;

    /* @ts-ignore */
    let uploadedImg = new Image();
    /* @ts-ignore */
    uploadedImg.src = uploadedImage;
    uploadedImg.onload = () => {
      /* @ts-ignore */
      context.drawImage(uploadedImg, 0, 0, canvas.width, canvas.height);

      /* @ts-ignore */
      let defaultImg = new Image();
      defaultImg.src = defaultImage;
      defaultImg.onload = () => {
        context.save();
        context.translate(
          position.x + size.width / 2,
          position.y + size.height / 2
        );
        context.rotate((rotation * Math.PI) / 180);
        context.drawImage(
          defaultImg,
          -size.width / 2,
          -size.height / 2,
          size.width,
          size.height
        );
        context.restore();

        const date = new Date();
        const currentTime = date.getSeconds();

        const link = document.createElement("a");
        link.download = `blended-image-${currentTime}.png`;
        /* @ts-ignore */
        link.href = canvas.toDataURL();
        link.click();
      };
    };
  };

  const calculateHandlePosition = () => {
    const radius = Math.max(size.width, size.height) / 2 + 20; // 20 pixels away from the edge
    const angleInRadians = rotation * (Math.PI / 180);
    const x = Math.cos(angleInRadians) * radius;
    const y = Math.sin(angleInRadians) * radius;
    return { x, y };
  };

  const handlePosition = calculateHandlePosition();

  const handleGenerateMeme = () => {
    setFirstStep(true);
  };

  const handlePrevious = () => {
    setFirstStep(false);
  };

  const toggleSelectImage = (e: any, item: any) => {
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
    setImageBg(imageSelect.filter((img) => img.checked === true));
  }, [imageSelect]);

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
          src: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  useEffect(() => {
    if (selectedFiles[0]?.src) {
      setUploadedImage(selectedFiles[0]?.src);
    } else {
      if (imageBg) {
        setUploadedImage(imageBg[imageBg?.length - 1]?.url);
      }
    }
  }, [selectedFiles, imageBg]);

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
            {firstSTep === false
              ? `${t("main.panda_cat_maker")}`
              : `${t("main.preview")}`}
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
            {firstSTep === false ? `${t("main.meme_description")}` : ""}
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
                    selectedFiles.map((file, i) => (
                      <>
                        <CustomImage
                          key={`list_${i}`}
                          alt="uploaded image"
                          src={file?.src}
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
                          {t("main.click_to_upload")}
                        </Text>{" "}
                        {t("main.drag_drop_file")} <br /> PNG, JPG or JPEG (max.
                        2mb)
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
            {firstSTep === false ? `${t("main.meme_template")}` : ""}
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

                      <Images
                        src={image.url}
                        width={["180px", "200px", "211px", "289px"]}
                        height={["170px", "198px", "198px", "200px"]}
                        alt="images"
                      />
                    </GridItem>
                  ))}
              </Grid>
            ) : (
              <>
                <DndProvider backend={HTML5Backend}>
                  <Container>
                    <Box
                      sx={{
                        w: "full",
                        h: "full",
                      }}
                    >
                      {uploadedImage && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: uploadedImageSize.width,
                            margin: "0 auto",
                            border: "2px solid #ccc",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                              height: uploadedImageSize.height,
                            }}
                          >
                            {/* upload image background  */}
                            {/* {selectedFiles &&
                                selectedFiles.length > 0 &&
                                selectedFiles.map((img) => ( */}
                            <img
                              src={uploadedImage}
                              alt="Uploaded"
                              onLoad={handleImageLoad}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                userSelect: "none", // Prevent text selection
                              }}
                            />
                            {/* ))} */}

                            <Rnd
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transform: `rotate(${rotation}deg)`,
                                border: "2px solid red",
                                userSelect: "none", // Prevent text selection
                              }}
                              size={{
                                width: size.width,
                                height: size.height,
                              }}
                              position={position}
                              onDragStop={(e, d) =>
                                setPosition({ x: d.x, y: d.y })
                              }
                              onResizeStop={(
                                e,
                                direction,
                                ref,
                                delta,
                                position
                              ) => {
                                setSize({
                                  width: parseInt(ref.style.width, 10),
                                  height: parseInt(ref.style.height, 10),
                                });
                                setPosition(position);
                              }}
                              bounds="parent"
                            >
                              <DraggableImage
                                src={defaultImage}
                                rotation={rotation}
                                onMouseDown={handleMouseDown}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  top: `calc(50% - 10px + ${handlePosition.y}px)`,
                                  left: `calc(50% - 10px + ${handlePosition.x}px)`,
                                  width: 20,
                                  height: 20,
                                  backgroundColor: "blue",
                                  borderRadius: "50%",
                                  cursor: "pointer",
                                }}
                                onMouseDown={handleRotationStart}
                                onTouchStart={handleRotationStart}
                              />
                            </Rnd>
                          </div>
                        </div>
                      )}
                    </Box>
                    <canvas ref={canvasRef} style={{ display: "none" }} />
                  </Container>
                </DndProvider>
              </>
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
                  {t("main.btn_back")}
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

                firstSTep === false
                  ? handleGenerateMeme()
                  : downloadBlendedImage();
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
                {firstSTep === false
                  ? `${t("main.btn_generate_meme")}`
                  : `${t("main.btn_download")}`}
              </Text>
            </CustomButton>
          </Flex>
        </Box>
      </Box>
    </chakra.div>
  );
}

export default page;
