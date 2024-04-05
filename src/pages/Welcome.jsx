import { motion as m } from "framer-motion";

const heading = ["N", "O", "T", "E", "W", "O", "T", "H", "Y"];

function Welcome() {
  return (
    <div className="overflow-hidden h-dvh grid grid-flow-row grid-rows-[auto,1fr]">
      <div>
        <m.div className="flex flex-row overflow-hidden relative top-[-8%]">
          {heading.map((el, i) => (
            <m.div
              layout="position"
              initial={{ y: 300 }}
              animate={{ y: -40 }}
              transition={{
                duration: 1,
                delay: i * 0.06,
                type: "spring",
              }}
              key={el}
              className="text-[13rem] h-[15.4rem] font-playfair font-medium "
            >
              {el}
            </m.div>
          ))}
        </m.div>
      </div>
      <div className=" grid grid-flow-col grid-cols-[auto,1fr]">
        <div className="bg-red-600 w-44"></div>
        <div className=" bg-blue-500"></div>
      </div>
    </div>
  );
}

export default Welcome;
