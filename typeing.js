function initTyped(elementSelector) {
  var typed = new Typed(elementSelector, {
    strings: ["Hii", "It's", "Your", "Brain"],
    typeSpeed: 150,
    BackSpeed: 15,
    loop: true,
    showCursor: false,
  });
}
function spanTyped(e) {
  var typed = new Typed(e, {
    strings: ["Hii", "It's", "your", "Brain"],
    typeSpeed: 150,
    BackSpeed: 15,
    loop: true,
    showCursor: false,
  });
}
initTyped(".span-III");
initTyped(".typing_left");
