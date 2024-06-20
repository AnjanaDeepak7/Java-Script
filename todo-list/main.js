// Buttons
const inputText = document.querySelector(".input");
const addTextBtn = document.querySelector(".add-text-btn");
const editTextBtn = document.querySelector(".edit-text-btn");
const clearAllBtn = document.querySelector(".clear-all-btn");

// variables
let listText;

// reload
window.addEventListener("DOMContentLoaded", () => {
  let elementPairs = {}, // Notice change here
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    elementPairs[keys[i]] = localStorage.getItem(keys[i]);
  }
});

// Actions
addTextBtn.addEventListener("click", () => {
  let id = new Date().getTime();
  listText = inputText.value;
  document.querySelector(".todo-list").innerHTML += addingText(id, listText);
  inputText.value = "";
  setItemToLocalStorage(id, listText);
});

// functions
const addingText = (id, listText) => {
  return `<div class="list-container">
          <input type="checkbox" id="list" name="list" value="list" />
          <label class="input-text" for="list" data-id="${id}">${listText}</label><br />
          <div class="btn-container">
            <button class="edit-btn">
              <i class="fa fa-edit"></i>
            </button>
            <button class="trash-btn">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>`;
};

// setItem to local storage
const setItemToLocalStorage = (elementKey, elementValue) => {
  localStorage.setItem(elementKey, elementValue);
};

// clear local storage
clearAllBtn.addEventListener("click", function () {
  localStorage.clear();
});
