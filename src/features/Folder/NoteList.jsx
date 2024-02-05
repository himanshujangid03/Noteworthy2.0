function NoteList({ item }) {
  return (
    <>
      <div>
        <div className=" card bg-white m-2 p-4">
          <h3 className=" card-title">{item.title}</h3>
          <p className=" card-body overflow-y-scroll h-52">{item.content}</p>
        </div>
        <div>Notes List</div>
      </div>
    </>
  );
}

export default NoteList;
