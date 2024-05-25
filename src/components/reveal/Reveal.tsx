import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useIsPresent } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import { moveUp } from "@/lib/animations";
import PandaCat from "@/constants/colorConstants";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

function Reveal({ children, width = "fit-content" }: Props) {
  const ref = useRef(null);
  const controls = useAnimation();
  const slideControls = useAnimation();

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      slideControls.start("visible");
    }
  }, [controls, slideControls, isInView]);

  return (
    <chakra.div
      ref={ref}
      sx={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        // whileInView={"visible"}
        variants={moveUp}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.3, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 20,
          background: PandaCat.primaryDark,
        }}
      />
    </chakra.div>
  );
}

export default Reveal;
