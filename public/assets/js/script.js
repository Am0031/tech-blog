const handleSignup = (event) => {
  event.preventDefault();
  console.log("handling signup");
};

const handleLogin = (event) => {
  event.preventDefault();
  console.log("handling login");
};

$("#signupForm").submit(handleSignup);
$("#loginForm").submit(handleLogin);
