const navBtn = document.querySelector(".nav-toggle");
const linkBtn = document.querySelector(".links");
navBtn.addEventListener("click", function () {
  console.log(linkBtn.classList);
  linkBtn.classList.toggle("show-links");
});
