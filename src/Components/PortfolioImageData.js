import React, { useRef, useState, useEffect } from "react";

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

const yaImages = [
  { src: yalanguageofthorns, alt: "Book cover of The Language of Thorns by Leigh Bardugo" },
  { src: yascottbrown, alt: "Book cover of XL by Scott Brown" },
  { src: yahollyblack, alt: "Book cover of The Modern Faerie Tales by Holly Black" },
  { src: yatomi, alt: "Book cover of Children of Virtue and Vengeance by Tomi Adeyemi" },
];
const mgImages = [
  { src: mgmyths, alt: "Book cover of Myths & Legends of the World by Lonely Planet Kids" },
  { src: mgodder, alt: "Book cover of Odder by Katherine Applegate" },
  { src: mgcookie, alt: "Book cover of Ben Yokoyama and the Cookie of Doom by Matthew Swanson" },
  {
    src: mgdaredevil,
    alt: "Book cover of The Daredevil's Guide to Dangerous Places by Lonely Planet Kids",
  },
];
const gnImages = [
  { src: gnbeawolf, alt: "Book cover of Bea Wolf by Boulet" },
  { src: gnthings, alt: "Book cover of Things in the Basement by Ben Hatke" },
  { src: gnlunar, alt: "Book cover of Lunar New Year Love Story by Gene Yang" },
  { src: gnshadow, alt: "Book cover of Shadow Life by Hiromi Goto" },
];

export { yaImages, mgImages, gnImages };
