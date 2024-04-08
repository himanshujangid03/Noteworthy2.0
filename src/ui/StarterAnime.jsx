import { motion as m } from "framer-motion";

function StarterAnime() {
  const pageVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <>
      <m.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="absolute h-dvh w-full overflow-hidden bg-blue-500 z-10"
      ></m.div>
    </>
  );
}

export default StarterAnime;
