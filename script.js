"use strict";

const input = document.querySelector(".input-text");
const addBtn = document.querySelector(".add");
const newField = document.querySelector(".text-icons");
const ul = document.querySelector("ul");
const tabWork = document.querySelector("#tab-work");
const tabPersonal = document.querySelector(".tab-personal");
const work = document.querySelector("main");
const personal = document.querySelector(".personal");

const input2 = document.querySelector(".input-text2");
const add2Btn = document.querySelector(".add2");
const ul2 = document.querySelector("#ul2");

function addNewTask() {
  ul.innerHTML += `<li class="text-icons">
          <div class="new-field">${input.value}</div>
            <div class="icons">
              <i class="fa-solid fa-check check" id='check'></i>
              <i class="fa-solid fa-trash delete" id='delete'></i>
            </div>
          </div></li>`;

  input.value = "";
}

function addNewTask2() {
  ul2.innerHTML += `<li class="text-icons">
          <div class="new-field">${input2.value}</div>
            <div class="icons">
              <i class="fa-solid fa-check check" id='check'></i>
              <i class="fa-solid fa-trash delete" id='delete'></i>
            </div>
          </div></li>`;

  input2.value = "";
}

addBtn.addEventListener("click", (e) => {
  addNewTask();
});

add2Btn.addEventListener("click", (e) => {
  addNewTask2();
  console.log("add2-clicked");
});

document.addEventListener("keypress", (e) => {
  e.key === "Enter" ? addNewTask() : "";
});

ul.addEventListener("click", (e) => {
  const target = e.target;
  if (e.target.id === "delete") {
    e.target.parentElement.parentElement.remove();
  }
});

ul.addEventListener("click", (e) => {
  const target = e.target;
  if (e.target.id === "check") {
    e.target.parentElement.parentElement.style.opacity = 0.4;
  }
});

ul2.addEventListener("click", (e) => {
  const target = e.target;
  if (e.target.id === "delete") {
    e.target.parentElement.parentElement.remove();
  }
});

ul2.addEventListener("click", (e) => {
  const target = e.target;
  if (e.target.id === "check") {
    e.target.parentElement.parentElement.style.opacity = 0.4;
  }
});

tabPersonal.addEventListener("click", (e) => {
  work.classList.add("hide");
  personal.classList.remove("hide");
});

tabWork.addEventListener("click", (e) => {
  personal.classList.add("hide");
  work.classList.remove("hide");
});
