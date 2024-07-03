import { motion as m } from "framer-motion";

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

function NoteworthyHeading() {
  return (
    <>
      <m.div
        variants={ulVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:flex flex-row h-min overflow-hidden justify-center mb-6"
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
            className={` ${i < 4 && " text-blue-700"} lg:text-[11rem] lg:h-[12.15rem] top-10 relative overflow-hidden uppercase tracking-tight font-extrabold `}
          >
            {el}
          </m.div>
        ))}
      </m.div>
      <m.div
        variants={ulVariants}
        initial="hidden"
        animate="visible"
        className="flex lg:hidden flex-row h-min overflow-hidden justify-center mb-6"
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
            className={`${i < 4 && "text-blue-500"} text-6xl top-12 relative overflow-hidden uppercase tracking-tight font-extrabold`}
          >
            {el}
          </m.div>
        ))}
      </m.div>
    </>
  );
}

export default NoteworthyHeading;
