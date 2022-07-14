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

const handleAddComment = () => {
  console.log("handling add comment");
};

const handleAddPost = async (event) => {
  event.preventDefault();

  const id = parseInt($("#add-post-btn").attr("data-id"));
  const title = $("#inputTitle").val().trim();
  const postText = $("#inputPostText").val().trim();

  const postContent = { title, postText, id };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(postContent),
  };

  const response = await fetch("/api/posts", options);
  if (response.status !== 200) {
    console.error("Post creation failed");
  } else {
    $("#post-container").remove();
    $("#add-post-container")
      .append(`<div class="alert alert-secondary d-flex flex-column align-items-center">
    <h4 class="alert-heading text-center"><i class="fa-solid fa-check"></i> Your new post has been created successfully!</h4>
    <a class="btn btn-primary" href="/dashboard/create">Add another post</a>
    </div>`);
  }
};
const handleEditPost = async (event) => {
  event.preventDefault();

  const id = parseInt($("#edit-post-btn").attr("data-postId"));
  const title = $("#inputTitle").val().trim();
  const postText = $("#inputPostText").val().trim();

  const postContent = { title, postText };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(postContent),
  };

  const response = await fetch(`/api/posts/${id}`, options);
  if (response.status !== 200) {
    console.error("Post update failed");
  } else {
    $("#post-container").remove();
    $("#edit-post-container")
      .append(`<div class="alert alert-secondary d-flex flex-column align-items-center">
    <h4 class="alert-heading text-center"><i class="fa-solid fa-check"></i> Your post has been updated successfully!</h4>
    </div>`);
  }
};
const handleDeletePost = () => {
  console.log("handling delete post");
};

$("#logout-btn").click(handleLogout);
$("#signupForm").submit(handleSignup);
$("#loginForm").submit(handleLogin);
$("#comment-form").submit(handleAddComment);
$("#add-post-form").submit(handleAddPost);
$("#edit-post-form").submit(handleEditPost);
$("#my-posts-container").click(handleDeletePost);
