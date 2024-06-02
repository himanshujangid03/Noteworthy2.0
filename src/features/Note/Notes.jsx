import NoteList from "./NoteList";
import { useNote } from "../../hooks/Notes hooks/useNote";
import { useParams } from "react-router";
import FolderDropdown from "../Folder/FolderDropdown";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import MotionPrimary from "@/Animation/MotionPrimary";
import NoteEdit from "./NoteEdit";
import { useCreateActivityLog } from "@/hooks/Activity hooks/useCreateActivityLog";
import { useUpdateNote } from "@/hooks/Notes hooks/useUpdateNote";
import { Loader } from "lucide-react";

const apiKey = "j4zqqn7p5njzj5f8kpqlgvu8cnk0viw2ljux112abwriyh3t";

function Notes() {
  const [editContent, setContent] = useState();
  const { setValue, reset, handleSubmit } = useForm();
  const { isUpdating, mutate } = useUpdateNote();
  const { notes } = useNote();
  const { noteId } = useParams();
  const currentNote = notes?.find((el) => el._id === noteId);
  const editorRef = useRef(null);
  const { mutate: mutateActivityFn } = useCreateActivityLog();

  const handleEditorChange = (content) => {
    setValue("content", content);
    setContent(content);
  };
  const check = currentNote?.content === editContent ? true : false;

  useEffect(() => {
    if (currentNote?.content && editorRef.current) {
      editorRef.current.setContent(currentNote.content);
    }
  }, [currentNote]);

  function onSubmit(data) {
    const updatedData = { ...data, noteId };
    mutate(updatedData);
    const activityData = {
      name: currentNote?.title,
      emoji: currentNote.emoji,
      updatedAt: Date.now(),
      action: "Update",
    };
    mutateActivityFn(activityData);
    reset();
  }

  return (
    <>
      <div className="h-full p-4 overflow-y-scroll  grid grid-flow-col grid-cols-[1fr,2fr] gap-4">
        <div className="h-full flex flex-col  gap-2 ">
          <FolderDropdown />
          <NoteList notes={notes} />
        </div>
        <div className=" bg-white rounded-xl flex flex-col p-6">
          <div className="grid grid-flow-col grid-cols-[1fr,auto] place-items-center">
            <h2 className=" text-center text-3xl grid my-2 capitalize w-max">
              {currentNote?.title}
            </h2>
            <NoteEdit />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 flex flex-col gap-2"
          >
            <MotionPrimary delay={0.3} className="flex-1 bg-white  ">
              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                apiKey={apiKey}
                init={{
                  height: "100%",
                  width: "100%",
                  branding: false,
                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
                initialValue={currentNote?.content}
                onEditorChange={handleEditorChange}
              />
            </MotionPrimary>
            <button
              disabled={check}
              className="btn !rounded-xl btn-primary w-full  "
            >
              {isUpdating ? <Loader /> : "Save"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Notes;
