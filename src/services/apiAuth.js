export async function login(data) {
  const response = await fetch("http://localhost:8000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (response.ok === false) throw new Error("Invalid email or password");
  return response;
}

export async function signUp(data) {
  const response = await fetch("http://localhost:8000/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok === false) throw new Error("failed");

  return response;
}

export async function isLoggedIn() {
  const response = await fetch("http://localhost:8000/user/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const resData = await response.json();

  if (response.ok === false)
    throw new Error("You are not Logged In! Please login to get access");

  return resData;
}

export async function logout() {
  const response = await fetch("http://localhost:8000/user/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) return new Error("Log out failed. Something went wrong!");

  return response;
}

export async function googleLogout() {
  const response = await fetch("http://localhost:8000/user/google/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) return new Error("Log out failed. Something went wrong!");

  return response;
}
