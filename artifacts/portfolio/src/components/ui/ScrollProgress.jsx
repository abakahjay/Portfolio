import { motion, useScroll, useSpring } from "framer-motion";
import { Box } from "@chakra-ui/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box
      as={motion.div}
      style={{ scaleX }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      h="3px"
      bg="brand.500"
      transformOrigin="0%"
      zIndex={10000}
    />
  );
}
