const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfile = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileBtn.querySelector(".modal__close-btn");
const newPostBtn = document.querySelector(".profile__add-btn");
const newPost = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPost.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfile.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfile.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPost.classList.add("modal_is-opened");
});

newPostClosedBtn.addEventListener("click", function () {
  newPost.classList.remove("modal_is-opened");
});
