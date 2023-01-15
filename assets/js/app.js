const toggle_btn = document.querySelector(".toggle-btn");
const side = document.querySelector(".side-content");
const content = document.querySelector(".content");

// &&&&&&&&&&
let menu_off = true;

toggle_btn.addEventListener("click", () => {
  if (menu_off) {
    toggle_btn.classList.toggle("toggle-btn-hide");
    side.classList.toggle("resize-side");
    content.classList.toggle("create-content");
    setTimeout(() => {
      content.classList.toggle("visible-content");
      content.classList.toggle("show-content");
      toggle_btn.classList.toggle("toggle-btn-hide");
    }, 500);
    menu_off = false;
  } else {
    content.classList.toggle("show-content");
    setTimeout(() => {
      side.classList.toggle("resize-side");
      content.classList.toggle("visible-content");
      content.classList.toggle("create-content");
    }, 500);
    menu_off = true;
  }
});
