const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

var typed = new Typed(".typing", {
  strings: ["Welcome Buddy;)", "Let's Create Your", " Account=>"],
  typeSpeed: 150,
  BackSpeed: 15,
  loop: true,
});
