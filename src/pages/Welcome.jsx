import { motion as m } from "framer-motion";
import video from "../assets/welcome-video.webm";

const heading = ["N", "O", "T", "E", "W", "O", "T", "H", "Y"];

const ulVariants = {
  visible: {
    transition: {
      delayChildren: 0.5,
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
      <div className="overflow-hidden z-30 w-full h-0 pb-9/16">
        <video autoPlay muted className="absolute w-full h-auto ">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="overflow-hidden h-dvh grid bg-gray-200 grid-flow-row grid-rows-[auto,1fr]">
        <div>
          <m.div
            variants={ulVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-row overflow-hidden relative top-[-8%] p-6"
          >
            {heading.map((el, i) => (
              <m.div
                layout="position"
                variants={liVariants}
                transition={{ type: "spring", duration: 1.5 }}
                key={i}
                className="text-[13rem] h-[15.4rem] font-montserrat lowercase font-black "
              >
                {el}
              </m.div>
            ))}
          </m.div>
        </div>
        <div className=" grid grid-flow-col grid-cols-[auto,1fr]">
          <div className=" w-44"></div>
          <div className=" "></div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
