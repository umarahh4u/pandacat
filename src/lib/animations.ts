export const leftVarients = {
  hidden: {
    opacity: 0,
    transform: "translateX(-200px)",
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
    transform: "translateX(0px)",
  },
};
export const rightVarients = {
  hidden: {
    opacity: 0,
    transform: "translateX(200px)",
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
    transform: "translateX(0px)",
  },
};

export const moveUp = {
  hidden: {
    opacity: 0,
    transform: "translateY(200px)",
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.25,
    },
    transform: "translateY(0px)",
  },
};

export const moveDown = {
  hidden: {
    opacity: 0,
    transform: "translateY(-200px)",
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
    transform: "translateY(0px)",
  },
};

export const boxVarients = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
