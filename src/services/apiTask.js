export async function getTask() {
  const response = await fetch(`http://localhost:8000/task/get/`, {
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

export async function createTask(data) {
  const response = await fetch("http://localhost:8000/task/create", {
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
  const { taskId } = data;
  const response = await fetch(
    `http://localhost:8000/parent-task/update/${taskId}`,
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
  const { taskId } = data;
  const response = await fetch(
    `http://localhost:8000/parent-task/delete/${taskId}`,
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
