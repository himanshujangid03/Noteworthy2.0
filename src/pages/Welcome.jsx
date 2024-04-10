import { motion as m } from "framer-motion";
import video from "../assets/welcome2.webm";
import noteImage from "../assets/slide1.jpg";

const heading = ["n", "o", "t", "e", "w", "o", "r", "t", "h", "y"];

const ulVariants = {
  visible: {
    transition: {
      delayChildren: 3.1,
      staggerChildren: 0.06,
    },
  },
};

const liVariants = {
  hidden: {
    y: 300,
  },
  visible: {
    y: -40,
  },
};

function Welcome() {
  return (
    <>
      <m.div
        animate={{ display: "none" }}
        transition={{ delay: 4.3, duration: 200 }}
        className="absolute h-dvh w-full"
      >
        <video autoPlay muted className="w-full h-full object-cover ">
          <source src={video} type="video/mp4" />
        </video>
      </m.div>

      <div className="overflow-hidden h-dvh grid grid-flow-row">
        <div>
          <m.div
            variants={ulVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-row justify-center h-48 overflow-hidden pt-8 "
          >
            {heading.map((el, i) => (
              <m.div
                layout="position"
                variants={liVariants}
                transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] }}
                key={i}
                className="text-[11rem] h-[12.5rem] overflow-hidden font-sora uppercase tracking-tight font-medium "
              >
                {el}
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
