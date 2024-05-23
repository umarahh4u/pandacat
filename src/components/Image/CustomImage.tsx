import NextImage from "next/image";
import { chakra, Box } from "@chakra-ui/react";

const Image = chakra(NextImage, {
  // baseStyle: { maxH: 1120, maxW: 1120 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "placeholder",
      "blurDataURL",
      "_hover",
      "layout",
    ].includes(prop),
});

const CustomImage = (props: any) => {
  const { src, width, height, alt, layout, placeholder, blurDataURL, ...rest } =
    props;
  // const defaultWidth = width ? width : ''

  return (
    <Box position="relative" {...rest}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        placeholder="blur"
        blurDataURL="/blur.jpeg"
        transition="all 0.5s"
      />
    </Box>
  );
};

export default CustomImage;
