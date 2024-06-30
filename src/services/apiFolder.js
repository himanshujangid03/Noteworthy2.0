export async function getFolder() {
  const response = await fetch("http://localhost:8000/folder/get", {
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

export async function createFolder(data) {
  const response = await fetch("http://localhost:8000/folder/create", {
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

export async function updateFolder(data) {
  const { folderId } = data;
  const response = await fetch(
    `http://localhost:8000/folder/update/${folderId}`,
    {
      method: "PATCH",
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

export async function deleteFolder(data) {
  const { folderId } = data;
  const response = await fetch(
    `http://localhost:8000/folder/delete/${folderId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (response.ok === false) throw new Error("Data not loaded");
  return response;
}
