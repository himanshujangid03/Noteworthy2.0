import styled from "styled-components";

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

function TaskTable() {
  return (
    <div className="overflow-x-auto">
      <h1 className="text-4xl m-4">All tasks</h1>
      <TableHeader className=" p-2 bg-white text-lg rounded-lg">
        <div>Task name</div>
        <div>status</div>
        <div>priority</div>
        <div>Due date</div>
        <div>last updated</div>
      </TableHeader>
    </div>
  );
}

export default TaskTable;
