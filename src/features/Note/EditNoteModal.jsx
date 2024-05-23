import { useForm } from "react-hook-form";
import { useNote } from "../../hooks/Notes hooks/useNote";
import { useParams } from "react-router";
import { useUpdateNote } from "../../hooks/Notes hooks/useUpdateNote";
import Loader from "../../ui/Loader";
import { RxCross2 } from "react-icons/rx";
import { useCreateActivityLog } from "../../hooks/Activity hooks/useCreateActivityLog";
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

function EditNoteModal() {
  const { register, handleSubmit, reset } = useForm();
  const [chooseEmoji, setChooseEmoji] = useState(false);
  const [selectEmoji, setSelectEmoji] = useState();
  const { isUpdating, mutate } = useUpdateNote();
  const { noteId } = useParams();
  const { notes } = useNote();
  const { mutate: mutateActivityFn } = useCreateActivityLog();
  const currentNote = notes?.find((note) => note._id === noteId);

  const emojiHandler = (e) => {
    setSelectEmoji(e.emoji);
    reset();
  };

  function onSubmit(data) {
    const updatedData = { ...data, noteId };
    mutate(updatedData);
    const activityData = {
      name: data.title,
      emoji: currentNote.emoji,
      updatedAt: Date.now(),
      action: "Update",
    };
    mutateActivityFn(activityData);
    reset();
  }
  return (
    <>
      <dialog id="edit_note" className="modal w-full">
        <div className="modal-box ">
          <form method="dialog">
            <button className="btn btn-sm p-2 m-1 !btn-circle btn-ghost absolute right-2 top-2">
              <RxCross2 className=" h-5 w-5" />
            </button>
          </form>
          <form
            className=" flex flex-col gap-4 h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
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
            </div>
            <div className="absolute top-40">
              <EmojiPicker onEmojiClick={emojiHandler} open={chooseEmoji} />
            </div>
            <div className=" flex flex-col gap-2">
              <label className=" text-xl font-medium" htmlFor="title">
                Name
              </label>
              <input
                type="text"
                id="title"
                className="input input-md text-xl bg-slate-300 "
                {...register("title", { required: "This field is required" })}
                defaultValue={currentNote?.title}
              />
            </div>

            <button className="btn !rounded-xl btn-primary self-end w-36">
              {isUpdating ? <Loader /> : "Save"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default EditNoteModal;
