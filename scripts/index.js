const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const addCardFormElement = editProfileModal.querySelector("");
const nameInput = editProfileModal.querySelector("");
const linkInput = editProfileModal.querySelector("");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  console.log("submitting");
  editProfileModal.classList.remove("modal_is-opened");
}

function handleDescriptionProfileSubmit(evt) {
  evt.preventDefault();
  console.log("submitting");
  editProfileModal.classList.remove("modal_is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(nameInput);
  console.log(linkInput);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
editProfileForm.addEventListener("submit", handleDescriptionProfileSubmit);
addCardFormElement.addEventListener("submit", handleAddCardSubmit);
