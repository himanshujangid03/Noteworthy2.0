export async function createNote(data) {
  const response = await fetch(
    "https://noteworthy-server-latest.onrender.com/note/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );

  if (response.ok === false) throw new Error("Data not loaded");
  return response;
}

export async function getAllNotes() {
  const response = await fetch(
    `https://noteworthy-server-latest.onrender.com/note/getAll`,
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

export async function getNote(folderId) {
  const response = await fetch(
    `https://noteworthy-server-latest.onrender.com/note/get/${folderId}`,
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
  const { noteId } = data;
  const response = await fetch(
    `https://noteworthy-server-latest.onrender.com/note/update/${noteId}`,
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

export async function deleteNote(data) {
  const { noteId } = data;
  const response = await fetch(
    `https://noteworthy-server-latest.onrender.com/note/delete/${noteId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    }
  );
  if (response.ok === false) throw new Error("Data not loaded");
  return response;
}
