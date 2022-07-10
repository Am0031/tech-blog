const setPasswordConfirmValidity = () => {};

const handleSignup = async (event) => {
  event.preventDefault();

  const username = $("#inputUsername").val().trim();
  const email = $("#inputEmail").val().trim();
  const password = $("#inputPassword1").val();
  const confirmPassword = $("#inputPassword2").val();

  if (password === confirmPassword) {
    // $("#inputPassword2").setCustomValidity("");
    console.log("passwords match");
  } else {
    // $("#inputPassword2").setCustomValidity("Passwords must match.");
    alert("Passwords do not match. Please amend the passwords");
    return false;
  }

  const userInfo = { username, email, password };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(userInfo),
  };

  const response = await fetch("/auth/signup", options);

  if (response.status !== 200) {
    console.error("Signup failed");
  } else {
    window.location.replace("/login");
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#inputEmail").val().trim();
  const password = $("#inputPassword").val();

  const userInfo = { email, password };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(userInfo),
  };

  const response = await fetch("/auth/login", options);

  if (response.status !== 200) {
    console.error("Login failed");
  } else {
    window.location.replace("/dashboard");
  }
};

const handleLogout = async (event) => {
  event.preventDefault();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch("/auth/logout", options);
  if (response.status !== 204) {
    console.error("Logout failed");
  } else {
    window.location.replace("/login");
  }
};

$("#logout-btn").click(handleLogout);
$("#signupForm").submit(handleSignup);
$("#loginForm").submit(handleLogin);
