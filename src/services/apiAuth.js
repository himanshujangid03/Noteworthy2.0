export async function login(data) {
  const response = await fetch("http://localhost:4000/user/login", {
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

export async function action({ request, params }) {
  const data = await request.formData();

  const userData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch(signupApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  console.log(response);

  if (!response.ok) {
    return response;
  }

  return redirect("/login");
}
