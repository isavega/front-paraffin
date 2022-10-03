export const signIn = async (email, password) => {
  try {
    const data = await fetch("/api/v1/sessions", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const response = await data.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async (userId) => {
  try {
    console.log("ENTRE 1 ");
    const data = await fetch(`/api/v1/sessions/${userId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
