const root = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");

// Set the theme on <html> and update the button text.
// Dark mode shows "LIGHT" (what you will switch to); light mode shows "DARK".
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  if (toggleButton) {
    toggleButton.textContent = theme === "dark" ? "LIGHT" : "DARK";
  }
}

// On page load: use the saved theme if there is one, otherwise keep the page default.
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") {
  applyTheme(savedTheme);
} else {
  applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");
}

function toggleTheme() {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
}

if (toggleButton) {
  toggleButton.addEventListener("click", toggleTheme);
}
