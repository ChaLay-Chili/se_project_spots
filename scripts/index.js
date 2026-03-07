const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

//
const editProfileForm = editProfileModal.querySelector(".modal__form");

// selecting name and description inputs from Modal forms
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

// spot stage 5
// select name and description from HTML
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

//step 3 new post form submission
const addCardFormElement = newPostModal.querySelector(".modal__form");

// function openModal () {
//   editProfileModal.classList.add("modal_is-opened");
// }
// function closeModal () {
//   editProfileModal.classList.remove("modal_is-opened");
// }
editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");

  //Connects HTML name to Modal Inputs.
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
});

//open and close mod
editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

//spot stage 5
// takes input on puts it into HTML titles
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

// step 3 New post form submission
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(profileNameEl.value, profileDescriptionEl.value);

  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
