import TaskCalendar from "@/ui/TaskCalendar";
import TaskOverview from "@/ui/TaskOverview";

function Home() {
  return (
    <div className=" lg:grid grid-flow-col grid-cols-[1fr,auto,auto] lg:p-4">
      <div className="flex  flex-col px-6 gap-6">
        <div className="w-full box-border  h-fit p-6  bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-3xl flex flex-col gap-24">
          <h2 className="lg:text-5xl text-3xl text-blue-100 font-semibold leading-tight ">
            Boost Your Productivity with Effective <br /> Task Management
          </h2>
          <button className="btn !rounded-full w-max">Get Started</button>
        </div>
        <TaskOverview />
      </div>
      <div className=" h-full hidden w-fit float-right lg:grid">
        <TaskCalendar />
      </div>
    </div>
  );
}

export default Home;
