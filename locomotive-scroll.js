const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.1,
});
let lastScrollY = 0;
scroll.on("scroll", (obj) => {
  // console.log(obj.scroll.y);
  if (isExpanded && obj.scroll.y !== lastScrollY) {
    input.click();
    isExpanded = false;
  }
  lastScrollY = obj.scroll.y;
});
