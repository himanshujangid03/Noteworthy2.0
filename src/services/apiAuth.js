export async function login(data) {
  const response = await fetch(
    "https://noteworthy-server-latest.onrender.com/user/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );

  if (response.ok === false) throw new Error("Invalid email or password");
  return response;
}

export async function signUp(data) {
  const response = await fetch(
    "https://noteworthy-server-latest.onrender.com/user/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (response.ok === false) throw new Error("failed");

  return response;
}

export async function isLoggedIn() {
  const response = await fetch(
    `${"https://noteworthy-server-latest.onrender.com/user/profile" || "https://noteworthy-server-latest.onrender.com/auth/check"}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  const resData = await response.json();

  if (response.ok === false)
    throw new Error("You are not Logged In! Please login to get access");

  return resData;
}

export async function logout() {
  const response = await fetch(
    "https://noteworthy-server-latest.onrender.com/user/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!response.ok) return new Error("Log out failed. Something went wrong!");

  return response;
}

export async function googleLogout() {
  const response = await fetch(
    "https://noteworthy-server-latest.onrender.com/user/google/logout",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!response.ok) return new Error("Log out failed. Something went wrong!");

  return response;
}

export async function updateName(data) {
  const response = await fetch(
    "https://noteworthy-server-latest.onrender.com/user/update-user",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) return new Error("Something went wrong!");

  return response;
}

export async function deleteUser() {
  const response = await fetch(
    "https://noteworthy-server-latest.onrender.com/user/delete-user",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (response.ok === false)
    throw new Error("Something went wrong. Try again later.");
  return response;
}
