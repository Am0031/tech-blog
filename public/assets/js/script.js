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

const handleAddComment = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const postId = parseInt($("#add-comment-btn").attr("data-postId"));
  const userId ='@Session["user"]';
  const commentText = $("#inputCommentText").val().trim();

  const commentInfo = { postId, commentText, userId };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(commentInfo),
  };

  const response = await fetch("/api/comments", options);
  if (response.status !== 200) {
    console.error("Comment creation failed");
    $("#add-comment-container").empty();
    $("#add-comment-container").off("click");
    $("#add-comment-container")
      .append(`<div class="alert alert-danger d-flex flex-column align-items-center">
    <h4 class="alert-heading text-center"><i class="fa-solid fa-check"></i> Sorry, your new comment could not be created!</h4>
    <h4> Please go back to <a class="btn btn-primary" href="/">the home page</a>. </h4>
    </div>`);
  } else {
    $("#add-comment-container").empty();
    $("#add-comment-container").off("click");
    $("#add-comment-container")
      .append(`<div class="alert alert-secondary d-flex flex-column align-items-center">
    <h4 class="alert-heading text-center"><i class="fa-solid fa-check"></i> Your new comment has been created successfully!</h4>
    </div>`);
  }
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
    $("#post-container").remove();
    $("#add-post-container")
      .append(`<div class="alert alert-danger d-flex flex-column align-items-center">
    <h4 class="alert-heading text-center"><i class="fa-solid fa-check"></i> Sorry, your new post could not be created!</h4>
    <h4> Please go back to your <a class="btn btn-primary" href="/dashboard">dashboard</a>. </h4>
    </div>`);
  } else {
    $("#post-container").remove();
    $("#add-post-container")
      .append(`<div class="alert alert-secondary d-flex flex-column align-items-center">
    <h4 class="alert-heading text-center"><i class="fa-solid fa-check"></i> Your new post has been created successfully!</h4>
    <a class="btn btn-primary" href="/dashboard/create">Add another post</a>
    </div>`);
  }
};
const handleEditSubmit = async (event) => {
  event.preventDefault();

  const id = parseInt($("#edit-submit-btn").attr("data-postId"));
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
const handleChangePost = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const target = $(event.target);
  const buttonId = target.attr("data-btnId");
  const id = parseInt(target.attr("data-postId"));

  if (target.is("button") && buttonId === "delete-post-btn") {
    const confirmed = confirm(
      "Are you sur you want to delete this post? This cannot be undone."
    );
    if (confirmed) {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      };

      const response = await fetch(`/api/posts/${id}`, options);

      if (response.status !== 200) {
        console.error("Post deletion failed");
      } else {
        $(`#post-${id}`).empty();
        $(`#post-${id}`)
          .append(`<div class="alert alert-secondary d-flex flex-column align-items-center" id="delete-alert">
      <h4 class="alert-heading text-center"><i class="fa-solid fa-check"></i> Your post has been deleted successfully!</h4>
      </div>`);
      }
    }
  }

  if (target.is("button") && buttonId === "edit-post-btn") {
    window.location.replace(`/dashboard/edit/${id}`);
  }
};

$("#logout-btn").click(handleLogout);
$("#signupForm").submit(handleSignup);
$("#loginForm").submit(handleLogin);
$("#comment-form").submit(handleAddComment);
$("#add-post-form").submit(handleAddPost);
$("#edit-post-form").submit(handleEditSubmit);
$("#my-posts-container").click(handleChangePost);
