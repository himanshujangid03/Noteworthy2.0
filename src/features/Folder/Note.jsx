function Note({ note }) {
  return (
    <>
      <div className=" card bg-white m-2 p-4">
        <li className=" card-title">{note.title}</li>
        <li className=" card-body">{note.content}</li>
      </div>
    </>
  );
}

export default Note;
