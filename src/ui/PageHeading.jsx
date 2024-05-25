import { motion as m } from "framer-motion";

function PageHeading({ heading }) {
  return (
    <div className=" flex sr flex-col overflow-hidden mb-4">
      <m.h1
        initial={{ y: "100px" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" text-6xl font-extrabold text-gray-400/90 self-center"
      >
        {heading}
      </m.h1>
    </div>
  );
}

export default PageHeading;
