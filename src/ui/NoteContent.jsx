import { useNote } from "@/hooks/Notes hooks/useNote";
import { Editor } from "@tinymce/tinymce-react";
import { useParams } from "react-router";
import { CiEdit } from "react-icons/ci";
import { useRef } from "react";

const apiKey = "j4zqqn7p5njzj5f8kpqlgvu8cnk0viw2ljux112abwriyh3t";

function NoteContent() {
  const { notes } = useNote();
  const { noteId } = useParams();
  console.log(noteId);
  const currentNote = notes?.find((el) => el._id === noteId);

  const editorRef = useRef(null);

  const handleEditorChange = (content) => {
    if (editorRef.current) {
      onContentChange(content);
    }
  };

  return (
    <>
      <div className="grid grid-flow-row grid-rows-[1fr,auto] bg-white rounded-xl">
        <Editor
          apiKey={apiKey}
          init={{
            branding: false,
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
          }}
          initialValue={currentNote?.title && currentNote?.content}
          onEditorChange={handleEditorChange}
        />
        <button className="btn btn-primary px-4 w-full mt-2">
          <CiEdit className="size-7" />
          Save
        </button>
      </div>
    </>
  );
}

export default NoteContent;
