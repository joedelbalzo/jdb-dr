import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CarouselRow = ({ controls }) => {
  const images = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={controls}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        marginBottom: "2rem",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            width: "250px",
            height: "377px",
            background: "gray",
            border: "1px solid black",
            margin: "1rem",
          }}
        />
      ))}
    </motion.div>
  );
};
