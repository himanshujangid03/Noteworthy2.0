import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUpdateTask } from "@/hooks/Task hooks/useUpdateTask";
import { CiEdit } from "react-icons/ci";
import { PiTrashSimpleLight } from "react-icons/pi";
import { GoCheck } from "react-icons/go";
import { PiDotsThreeBold } from "react-icons/pi";
import { useDeleteTask } from "@/hooks/Task hooks/useDeleteTask";

function TaskDropdown({ taskId }) {
  const { mutate } = useUpdateTask();
  const { mutate: deleteMutateFn } = useDeleteTask();

  const onComplete = () => {
    const status = "completed";
    const overdue = false;
    const data = { status, overdue, taskId };
    mutate(data);
  };

  const onProgress = () => {
    const status = "pending";
    const data = { status, taskId };
    mutate(data);
  };

  const onDelete = () => {
    deleteMutateFn(taskId);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className=" outline-none rounded-full hover:bg-gray-100 p-1">
            <PiDotsThreeBold className=" size-6" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit !rounded-xl">
          <DropdownMenuGroup className=" flex p-1 !rounded-xl ">
            <DropdownMenuItem className="rounded-lg focus:bg-green-100 transition-colors">
              <button className="flex w-fit" onClick={onComplete}>
                <GoCheck className="size-7 text-green-800" />
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg focus:bg-blue-100">
              <button className="flex" onClick={onProgress}>
                <CiEdit className="size-7 text-blue-800" />
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg focus:bg-red-100">
              <button className="flex" onClick={onDelete}>
                <PiTrashSimpleLight className="size-7 text-red-800" />
              </button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default TaskDropdown;
