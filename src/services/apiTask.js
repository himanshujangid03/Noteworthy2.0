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
  const response = await fetch("http://localhost:8000/task/create/", {
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

export async function updateTask(data) {
  const { taskId } = data;
  const response = await fetch(`http://localhost:8000/task/update/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (response.ok === false) throw new Error("Data not loaded");
  return response;
}

export async function deleteTask(taskId) {
  const response = await fetch(`http://localhost:8000/task/delete/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (response.ok === false) throw new Error("Data not loaded");
  return response;
}
