import NoteList from "./NoteList";
import { useNoteFromFolder } from "../../hooks/useNoteFromFolder";
import styled from "styled-components";
import { useParams } from "react-router";
import NoteEdit from "./NoteEdit";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const StyledNote = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

function Notes() {
  const { notes } = useNoteFromFolder();
  const { noteId } = useParams();
  const currentNote = notes?.find((el) => el._id === noteId);

  return (
    <>
      <StyledDiv className="p-2 gap-6 h-full">
        <StyledNote className=" p-4 gap-4 card bg-secondary">
          <StyledLayout className="grid grid-flow-col place-items-center">
            <h2 className=" text-center text-3xl grid m-0 capitalize w-max">
              {!currentNote ? notes?.at(0)?.title : currentNote?.title}
            </h2>
            <NoteEdit />
          </StyledLayout>
          <div className=" divider m-0"></div>
          <p className=" p-2 text-xl">
            {!currentNote ? notes?.at(0)?.content : currentNote?.content}
          </p>
        </StyledNote>
        <NoteList notes={notes} />
      </StyledDiv>
    </>
  );
}

export default Notes;
