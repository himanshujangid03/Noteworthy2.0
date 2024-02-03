export async function getFolder() {
  const response = await fetch("http://localhost:4000/note/get-folder", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const resData = await response.json();

  if (response.ok === false) throw new Error("Data not loaded");
  return resData;
}

export async function getNotesFromFolderById(folderId) {
  console.log(folderId);
  const response = await fetch(
    `http://localhost:4000/note/getnotes-folder/${folderId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  const resData = await response.json();
  console.log(resData);

  if (response.ok === false) throw new Error("Data not loaded");
  return resData;
}
