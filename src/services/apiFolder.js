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

export async function createFolder(data) {
  const response = await fetch("http://localhost:4000/note/create-folder", {
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
