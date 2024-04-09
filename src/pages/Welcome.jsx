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
      <div className="absolute h-dvh w-full">
        <video autoPlay muted className="w-full h-full object-cover ">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="overflow-hidden h-dvh grid bg-gray-200 grid-flow-row grid-rows-[auto,1fr]">
        <div>
          <m.div
            variants={ulVariants}
            initial="hidden"
            animate="visible"
            className="flex h-[17rem] flex-row overflow-hidden relative top-[-8%] p-6"
          >
            {heading.map((el, i) => (
              <m.div
                layout="position"
                variants={liVariants}
                transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] }}
                key={i}
                className="text-[13rem] h-[15.4rem] font-sora font-bold "
              >
                {el}
              </m.div>
            ))}
          </m.div>
        </div>
        <div className=" grid grid-flow-col grid-cols-[auto,1fr]">
          <div className=" w-96 grid grid-flow-row place-content-center ">
            <p className="text-center text-5xl mb-4">Get Started</p>
            <button className="btn btn-primary">Login to your account</button>
            <p className="text-center">OR</p>
            <button className="btn btn-primary">Signup for new account</button>
          </div>
          <m.div
            layout
            initital={{}}
            className=" overflow-hidden  p-1 grid place-content-center"
          >
            <m.img
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 4,
              }}
              src={noteImage}
              alt={noteImage}
              className=" object-cover rounded-3xl ring-2 ring-gray-300 shadow-xl"
            />
          </m.div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
