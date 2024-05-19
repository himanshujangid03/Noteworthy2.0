import { motion as m } from "framer-motion";

function PageHeading() {
  return (
    <div className=" flex sr flex-col overflow-hidden mb-6">
      <m.h1
        initial={{ y: "100px" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className=" text-6xl font-extrabold text-gray-400/90 self-center"
      >
        My Folder
      </m.h1>
    </div>
  );
}

export default PageHeading;
