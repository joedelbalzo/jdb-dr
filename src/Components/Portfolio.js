import React, { useRef, useState, useEffect } from "react";
import { FadeComponent } from "./FadeComponent";
import { motion, useAnimation } from "framer-motion";
import { useWindowSize } from "@react-hook/window-size";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

//images
//ya
import yalanguageofthorns from "./assets/portfolio/yalanguageofthorns.jpg";
import yascottbrown from "./assets/portfolio/yascottbrown.jpg";
import yahollyblack from "./assets/portfolio/yahollyblack.jpg";
import yatomi from "./assets/portfolio/yatomi.jpg";
//mg
import mgmyths from "./assets/portfolio/mgmyths.jpg";
import mgodder from "./assets/portfolio/mgodder.jpg";
import mgcookie from "./assets/portfolio/mgcookie.jpg";
import mgdaredevil from "./assets/portfolio/mgdaredevil.jpg";
//gn
import gnbeawolf from "./assets/portfolio/gnbeawolf.jpg";
import gnthings from "./assets/portfolio/gnthings.jpg";
import gnlunar from "./assets/portfolio/gnlunar.jpg";
import gnshadow from "./assets/portfolio/gnshadow.jpg";

const Portfolio = () => {
  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [width] = useWindowSize();
  const images = [1, 2, 3, 4];
  const yaImages = [yalanguageofthorns, yascottbrown, yahollyblack, yatomi];
  const mgImages = [mgmyths, mgodder, mgcookie, mgdaredevil];
  const gnImages = [gnbeawolf, gnthings, gnlunar, gnshadow];

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const transition = {
    duration: 1,
    ease: "easeInOut",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref1.current) controls1.start({ x: "0%" });
            if (entry.target === ref2.current) controls2.start({ x: "0%" });
            if (entry.target === ref3.current) controls3.start({ x: "0%" });
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(ref1.current);
    observer.observe(ref2.current);
    observer.observe(ref3.current);

    return () => observer.disconnect();
  }, []);

  return (
    <FadeComponent>
      <h2 className="page-header">PORTFOLIO</h2>
      <h3 className="page-subheader">A small collection of some of my favorites:</h3>
      <div style={{ overflowX: "hidden" }}>
        <div className="portfolio-section-title">Young Adult</div>
        <motion.div
          ref={ref1}
          initial={{ x: "100%" }}
          animate={controls1}
          transition={transition}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {yaImages.map((image, index) => (
            <img key={index} src={image} className="image-carousel" />
          ))}
        </motion.div>
        <div className="portfolio-section-title">Middle Grade</div>
        <motion.div
          ref={ref2}
          initial={{ x: "100%" }}
          animate={controls2}
          transition={transition}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {mgImages.map((image, index) => (
            <img key={index} src={image} className="image-carousel" />
          ))}
        </motion.div>
        <div className="portfolio-section-title">Graphic Novels</div>
        <motion.div
          ref={ref3}
          initial={{ x: "100%" }}
          animate={controls3}
          transition={transition}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            overflow: "hidden",
            alignItems: "center",
            margin: "auto",
          }}
        >
          {gnImages.map((image, index) => (
            <img key={index} src={image} className="image-carousel" />
          ))}
        </motion.div>
      </div>
    </FadeComponent>
  );
};

export default Portfolio;
