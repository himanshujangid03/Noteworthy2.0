export async function getParentTask() {
  const response = await fetch("http://localhost:4000/parent-task/get", {
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

export async function createParentTask(data) {
  const response = await fetch("http://localhost:4000/parent-task/create", {
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

export async function updateParentTask(data) {
  const { parentTaskId } = data;
  const response = await fetch(
    `http://localhost:4000/parent-task/update/${parentTaskId}`,
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

export async function deleteParentTask(data) {
  const { parentTaskId } = data;
  const response = await fetch(
    `http://localhost:4000/parent-task/delete/${parentTaskId}`,
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
