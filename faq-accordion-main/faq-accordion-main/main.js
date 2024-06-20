const plusIcons = document.querySelectorAll(".plus-icon");
const icons = document.querySelectorAll(".icon");
window.addEventListener("DOMContentLoaded", function () {
  plusIcons.forEach(function (icon) {
    icon.classList.add("show");
  });
});
icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    if (icon.classList.contains("plus-icon")) {
      icons.forEach(function (item) {
        if (item != icon) {
          if (item.classList.contains("show" && "minus-icon")) {
            item.classList.remove("show");
            let otherPlusIcon = item.previousElementSibling;
            otherPlusIcon.classList.add("show");
            let otherAnswerIcon =
              item.parentElement.parentElement.nextElementSibling;
            otherAnswerIcon.classList.remove("show");
          }
        }
      });
      icon.classList.remove("show");
      let minusIcon = icon.nextElementSibling;
      minusIcon.classList.add("show");
      let answerIcon = icon.parentElement.parentElement.nextElementSibling;
      answerIcon.classList.add("show");
    } else if (icon.classList.contains("minus-icon")) {
      icon.classList.remove("show");
      let plusIcon = icon.previousElementSibling;
      plusIcon.classList.add("show");
      let answerIcon = icon.parentElement.parentElement.nextElementSibling;
      answerIcon.classList.remove("show");
    }
  });
});
