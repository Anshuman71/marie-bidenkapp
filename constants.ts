import { TargetAndTransition, VariantLabels } from "framer-motion";
import { LinkInformationType } from "./types";

export const experiences: LinkInformationType[] = [
  {
    name: "Frontastic",
    url: "https://frontastic.cloud",
  },
  {
    name: "Canoo",
    url: "https://canoo.com",
  },
  {
    name: "Delightree",
    url: "https://delightree.com",
  },
  {
    name: "Jynx",
    url: "https://jynxit.us",
  },
  {
    name: "CollegeBasket",
    url: "https://collegebasket.now.sh",
  },
];

export const contacts: LinkInformationType[] = [
  {
    name: "Home",
    url: "/",
    sameTab: true,
  },
  {
    name: "Email",
    url: "mailto:hi@theanshuman.dev",
    sameTab: true,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mariebie/",
  },
  {
    name: "Github",
    url: "https://github.com/Anshuman71",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/sun_anshuman",
  },
  {
    name: "Medium",
    url: "https://anshuman-bhardwaj.medium.com",
  },

  {
    name: "Instagram",
    url: "https://instagram.com/sun_anshuman",
  },
  {
    name: "Resume",
    url: "https://www.notion.so/Resume-92cc4b433e454b4ab749f3e3f40c6239",
  },
];

export const technologies: LinkInformationType[] = [
  {
    name: "react",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "NodeJS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  },
  {
    name: "firebase",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
  },
  {
    name: "firebase",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
];

export const containerVariants = {
  initial: { background: "#111827" },
  animate: {
    background: "#111827",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};

export const mainVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

export const techParentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

export const techVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const hover: { [key: string]: VariantLabels | TargetAndTransition } = {
  react: {
    rotate: 360,
    transition: {
      ease: "linear",
      duration: 4,
      repeat: Infinity,
    },
  },
  others: {
    scale: 1.05,
  },
};
