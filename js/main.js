const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}const toggleButton = document.getElementById("theme-toggle");

function toggleTheme() {
  const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

if (toggleButton) {
  toggleButton.addEventListener("click", toggleTheme);
}