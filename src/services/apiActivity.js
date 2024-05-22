export async function createActivityLog(data) {
  const response = await fetch("http://localhost:4000/activity/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (response.ok === false)
    return new Error("Something went wrong. Try again later.");
}

export async function getActivityLog() {
  const response = await fetch("http://localhost:4000/activity/get", {
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
