//import { motion as m } from "framer-motion";
import TaskCalendar from "@/ui/TaskCalendar";
import TaskOverview from "@/ui/TaskOverview";

function Home() {
  return (
    <div className="h-full grid grid-flow-col grid-cols-[1fr,auto] p-4">
      <div className="flex flex-col px-6 gap-6">
        <div className="w-full h-fit p-6  bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-3xl flex flex-col gap-8">
          <h2 className="text-5xl text-blue-100 font-cabinet font-semibold leading-tight ">
            Boost Your Productivity with Effective <br /> Task Management
          </h2>
          <button className="btn !rounded-full w-max">Get Started</button>
        </div>
        <TaskOverview />
        <div></div>
      </div>
      <div className=" h-full hidden w-fit float-right lg:grid place-content-center">
        <TaskCalendar />
      </div>
    </div>
  );
}

export default Home;
