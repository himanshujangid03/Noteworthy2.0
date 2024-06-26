import { useForm } from "react-hook-form";
import { useNote } from "../../hooks/Notes hooks/useNote";
import { useParams } from "react-router";
import { useUpdateNote } from "../../hooks/Notes hooks/useUpdateNote";
import Loader from "../../ui/Loader";
import { RxCross2 } from "react-icons/rx";
import { useCreateActivityLog } from "../../hooks/Activity hooks/useCreateActivityLog";
import { CiCircleInfo } from "react-icons/ci";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useDeleteNote } from "@/hooks/Notes hooks/useDeleteNote";

function MobileEditNoteModal() {
  const { register, handleSubmit, reset } = useForm();
  const [chooseEmoji, setChooseEmoji] = useState(false);
  const { isUpdating, mutate } = useUpdateNote();
  const { noteId } = useParams();
  const { notes } = useNote();
  const { mutate: mutateActivityFn } = useCreateActivityLog();
  const { mutate: deleteMutateFn } = useDeleteNote();
  const currentNote = notes?.find((note) => note._id === noteId);
  const [selectEmoji, setSelectEmoji] = useState(currentNote?.emoji);

  const emojiHandler = (e) => {
    setSelectEmoji(e.emoji);
    reset();
  };

  function onDeleteSubmit(data) {
    const updatedData = { ...data, noteId };
    deleteMutateFn(updatedData);
    const activityData = {
      name: data.title,
      emoji: data.emoji,
      updatedAt: Date.now(),
      action: "Delete",
    };
    mutateActivityFn(activityData);
    reset();
  }

  function onSubmit(data) {
    const updatedData = { ...data, noteId };
    mutate(updatedData);
    const activityData = {
      name: data.title,
      emoji: data.emoji,
      updatedAt: Date.now(),
      action: "Update",
    };
    mutateActivityFn(activityData);
    reset();
  }
  return (
    <>
      <dialog id="edit_note_mb" className="modal">
        <div className="modal-box h-fit">
          <form method="dialog">
            <button className="btn btn-sm p-2 m-1 !btn-circle btn-ghost absolute right-2 top-2">
              <RxCross2 className=" size-5" />
            </button>
          </form>

          <form
            className=" flex flex-col gap-4 h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-3">
              <label htmlFor="emoji" className="text-xl font-medium">
                Add Emoji
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  id="emoji"
                  {...register("emoji")}
                  value={selectEmoji}
                  className="input bg-slate-300 rounded-xl w-20 text-2xl"
                />
                <span
                  onClick={() => setChooseEmoji((el) => !el)}
                  className="btn btn-md w-16 transition-all"
                >
                  {chooseEmoji ? "X" : "Add"}
                </span>
                <div className="">
                  <EmojiPicker
                    width={"95%"}
                    height={"25rem"}
                    onEmojiClick={emojiHandler}
                    open={chooseEmoji}
                  />
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <label className=" text-xl font-medium" htmlFor="title">
                Name
              </label>
              <input
                type="text"
                id="title"
                className="input input-md text-xl bg-slate-300 "
                {...register("title")}
                defaultValue={currentNote?.title}
              />
            </div>
            <div className="lg:hidden flex flex-col gap-2">
              <p className="flex gap-2 mt-0 mb-3 bg-blue-500/50 p-1 px-2 font-medium rounded-xl">
                <CiCircleInfo className="mt-1 size-6" /> The Text Editor is
                available for Desktop only.
              </p>
              <label className=" text-xl font-medium" htmlFor="content">
                Content
              </label>
              <textarea
                type="text"
                id="content"
                className="textarea h-44 text-xl bg-slate-300 "
                {...register("content", { required: "This field is required" })}
                defaultValue={currentNote?.content}
              />
            </div>
            <button className="btn !rounded-xl btn-primary self-end w-36">
              {isUpdating ? <Loader /> : "Save"}
            </button>
          </form>
          <div className="divider m-1"></div>
          <form action="DELETE" onSubmit={handleSubmit(onDeleteSubmit)}>
            <button
              className="btn btn-error float-end "
              disabled={!currentNote?.title ? true : false}
              onClick={() =>
                document
                  .getElementById("edit_note_mb")
                  .classList.remove("modal-open")
              }
            >
              Delete note
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default MobileEditNoteModal;
