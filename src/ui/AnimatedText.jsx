import { motion as m } from "framer-motion";
import { useState } from "react";

const parentVariants = {
  visible: {
    transition: {
      delayChildren: 3.5,
      staggerChildren: 0.04,
    },
  },
};

const childVariants = {
  hidden: {
    y: 300,
  },
  visible: {
    y: 0,
  },
};

function AnimatedText({ text, parentClass, childClass }) {
  const [startAnimate, setAnimate] = useState(false);
  return (
    <>
      <m.div
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => startAnimate(false)}
        variants={parentVariants}
        animate={"visible"}
        className={parentClass}
      >
        {text.split("").map((char, i) => (
          <m.p
            key={i}
            className={childClass}
            variants={childVariants}
            animate={startAnimate ? "visible" : "hidden"}
            transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] }}
          >
            {char}
          </m.p>
        ))}
      </m.div>
    </>
  );
}

export default AnimatedText;
