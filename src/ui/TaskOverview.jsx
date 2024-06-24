function TaskOverview() {
  return (
    <div className="">
      <h1 className="text-2xl font-medium mb-1">Task Analysis</h1>
      <div className=" grid lg:grid-flow-col lg:grid-cols-4 grid-flow-row grid-cols-2 h-44">
        <div className=" bg-white m-2 p-5 flex flex-col justify-between ring-1 gap-3 ring-gray-300  rounded-3xl">
          <p className=" text-2xl lg:text-3xl md:text-xl font-medium">Todo</p>
          <span className=" lg:text-6xl md:text-3xl text-2xl font-bold font-cabinet self-end">
            10
          </span>
        </div>
        <div className=" bg-white m-2 p-5 flex flex-col justify-between gap-3 ring-1 ring-gray-300  rounded-3xl">
          <p className=" text-2xl lg:text-3xl md:text-xl font-medium">
            In Progress
          </p>
          <span className=" lg:text-6xl md:text-3xl text-2xl font-bold font-cabinet self-end">
            3
          </span>
        </div>
        <div className=" bg-white m-2 p-5 flex flex-col justify-between gap-3 ring-1 ring-gray-300  rounded-3xl">
          <p className=" text-2xl lg:text-3xl md:text-xl font-medium">
            Completed
          </p>
          <span className=" lg:text-6xl md:text-3xl text-2xl font-bold font-cabinet self-end">
            5
          </span>
        </div>
        <div className=" bg-white m-2 p-5 flex flex-col justify-between gap-3 ring-1 ring-gray-300  rounded-3xl">
          <p className=" text-2xl lg:text-3xl md:text-xl font-medium">
            Overdue
          </p>
          <span className=" lg:text-6xl md:text-3xl text-2xl font-bold font-cabinet self-end">
            5
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskOverview;
