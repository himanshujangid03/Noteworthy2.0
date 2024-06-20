import { motion as m } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const heading = ["n", "o", "t", "e", "w", "o", "r", "t", "h", "y"];

const ulVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
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
  exit: {
    y: -300,
  },
};

function Welcome() {
  const [startAnimate, setAnimate] = useState(false);
  return (
    <>
      <div className="overflow-hidden h-dvh place-content-center ">
        <m.div
          variants={ulVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-row h-min overflow-hidden justify-center mb-6"
        >
          {heading.map((el, i) => (
            <m.div
              layout="position"
              variants={liVariants}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.05],
                type: "spring",
                damping: 100,
                stiffness: 300,
              }}
              key={i}
              className="lg:text-[11rem] lg:h-[12.15rem] top-10 relative overflow-hidden uppercase tracking-tight font-extrabold "
            >
              {el}
            </m.div>
          ))}
        </m.div>

        <div className=" p-4 flex flex-col items-start gap-6 lg:w-[60rem] text-wrap m-auto">
          <m.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.05],
              damping: 100,
              stiffness: 300,
            }}
            className=" text-xl lg:text-3xl text-center"
          >
            Welcome to Noteworthy Notes, the ultimate application for all your
            note-taking needs. Whether you are jotting down quick reminders,
            organizing your thoughts, or drafting important documents,
            Noteworthy Notes has you covered.
          </m.p>
          <m.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            onMouseEnter={() => setAnimate(true)}
            onMouseLeave={() => setAnimate(false)}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.05],
            }}
            className="special-btn rounded-full"
          >
            <Link
              to={"/login"}
              className="flex gap-4 items-center cursor-pointer py-4 px-8 text-xl font-medium"
            >
              Get Started
              <m.span
                animate={{ x: startAnimate ? 3 : 0 }}
                transition={{ delay: 0.2 }}
              >
                <FaArrowRight className="size-5" />
              </m.span>
            </Link>
          </m.button>
        </div>
      </div>
    </>
  );
}

export default Welcome;

/*<m.div
  animate={{ display: "none" }}
  transition={{ delay: 4.3, duration: 200 }}
  className="absolute h-dvh w-full"
>
  <video autoPlay muted className="w-full h-full object-cover ">
    <source src={video} type="video/mp4" />
  </video>
</m.div>;*/
