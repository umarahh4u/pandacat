import React from "react";
import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import PandaCat from "@/constants/colorConstants";

type CustomButtonPropType = ButtonProps & {
  variant?: "outline" | "default" | "gray";
};

const BaseButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    width="full"
    h="3.75rem"
    maxH="3.75rem"
    boxShadow={"inset -17px -19px 2px -16px rgba(0,0,0,0.54)"}
    padding="0"
    border="1px solid black "
    background={"hsl(360deg 100% 35%)"}
    fontSize="lg"
    transition="all 0.4s cubic-bezier(.08,.52,.52,1)"
    _focus={{ boxShadow: "none" }}
    {...props}
  >
    {children}
  </Button>
);

const CustomButton: React.FC<CustomButtonPropType> = ({
  variant = "default",
  children,
  ...props
}) => {
  switch (variant) {
    case "gray":
      return (
        <BaseButton
          color="white"
          transform={"skew(-15deg)"}
          bgColor="#C7D6BB"
          _hover={{
            color: "gray.300",
            bgColor: "#EEF3EB",
            border: "1px solid #696974",
          }}
          {...props}
        >
          {children}
        </BaseButton>
      );
    default:
      return (
        <BaseButton
          color="white"
          transform={"skew(-15deg)"}
          bgColor={"rgba(98, 170, 67, 0.8)"}
          _hover={{
            opacity: 0.8,
          }}
          _active={{
            bgColor: "primaryLight",
          }}
          {...props}
        >
          {children}
        </BaseButton>
      );
  }
};

export default CustomButton;
