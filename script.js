const input = document.querySelector("input");
const inputWrapper = document.querySelector(".changer_wrapper");
const leftWrapper = document.querySelector(".l_wrapper");
const rightWrapper = document.querySelector(".r_wrapper");
//!=============================================================
//! Set initial states
//!=============================================================
function setInitialState() {
  leftWrapper.style.transform = "translateX(-999px)";
  rightWrapper.style.width = "100%";
  rightWrapper.style.marginLeft = "0";
  inputWrapper.style.width = "5%";
}
setInitialState();
function setExpandedState() {
  leftWrapper.style.transform = "translateX(0)";
  rightWrapper.style.width = "80%";
  rightWrapper.style.marginLeft = "20%";
  inputWrapper.style.width = "20%";
}
let isExpanded = false;
input.addEventListener("click", function () {
  if (isExpanded) {
    setInitialState();
  } else {
    setExpandedState();
  }
  isExpanded = !isExpanded;
});
// let lastScrollY = window.scrollY;
// window.addEventListener("scroll", () => {
//   if (isExpanded && window.scrollY !== lastScrollY) {
//     input.click();

//     isExpanded = false;
//   }
// });
//!=============================================================
//!================Loader animation=============================
//!=============================================================
function loaderAnimation() {
  const lr_wrapper = document.querySelector(".lr_wrapper");
  lr_wrapper.style.display = "none";
  const loDing = document.querySelector(".loding");
  setTimeout(function () {
    loDing.style.top = "-999px";
    lr_wrapper.style.display = "block";
  }, 2000);
}
loaderAnimation();
