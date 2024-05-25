//import { motion as m } from "framer-motion";

import TaskCalendar from "@/ui/TaskCalendar";
import PageHeading from "../ui/PageHeading";

function Home() {
  return (
    <div className="h-full flex flex-col">
      <PageHeading heading={"Home"} />
      <div className="flex-1">
        <div className=" h-full float-right">
          <TaskCalendar />
        </div>
      </div>
    </div>
  );
}

export default Home;
