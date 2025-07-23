// Mobile nav toggle
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close mobile menu when link clicked
nav.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => nav.classList.remove("open"))
);

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();