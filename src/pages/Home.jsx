import { motion as m } from "framer-motion";
import video from "../assets/loading-bar.gif";

function Home() {
  return (
    <div>
      <h1 className=" text-5xl font-medium">
        {" "}
        <m.video src={video} muted autoPlay loop />
      </h1>
    </div>
  );
}

export default Home;
