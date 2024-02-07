import { useParams } from "react-router";

export async function createNote(data) {
  const response = await fetch("http://localhost:4000/note/create-note", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (response.ok === false) throw new Error("Data not loaded");
  return response;
}

export async function getNotesFromFolderById(folderId) {
  const response = await fetch(
    `http://localhost:4000/note/get-note/${folderId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    }
  );

  const resData = await response.json();

  if (response.ok === false) throw new Error("Data not loaded");
  return resData;
}

export async function updateNote(data) {
  console.log(data);
  const { noteId } = data;
  console.log(noteId);
  const response = await fetch(
    `http://localhost:4000/note/update-note/${noteId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }
  );

  if (response.ok === false) throw new Error("Data not loaded");
  return response;
}

export async function deleteNote() {
  const response = await fetch(
    `http://localhost:4000/note/get-note/${folderId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    }
  );
}
