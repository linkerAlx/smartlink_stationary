export const createUserApi = async (formdata) => {
  try {
    console.log("formdata", formdata);
    const response = await fetch("http://localhost:3000/user/create_user", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Something went wrong", error);
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await fetch("http://localhost:3000/user/login_user", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

// http://localhost:3000/user/login_user
