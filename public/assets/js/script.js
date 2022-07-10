const setPasswordConfirmValidity = () => {};

const handleSignup = async (event) => {
  event.preventDefault();

  const username = $("#inputUsername").val().trim();
  const email = $("#inputEmail").val().trim();
  const password = $("#inputPassword1").val();
  const confirmPassword = $("#inputPassword2").val();

  if (password === confirmPassword) {
    $("#inputPassword2").setCustomValidity("");
  } else {
    $("#inputPassword2").setCustomValidity("Passwords must match.");
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
    window.location.replace("/dashboard");
  }
};

const handleLogin = (event) => {
  event.preventDefault();
  console.log("handling login");
};

$("#signupForm").submit(handleSignup);
$("#loginForm").submit(handleLogin);
