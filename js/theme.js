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

const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    themeLabel.textContent = isDark ? 'LIGHT' : 'DARK';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  let startTheme = 'light';
  try { startTheme = localStorage.getItem('theme') || 'light'; } catch (e) {}
  applyTheme(startTheme === 'dark' ? 'dark' : 'light');

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });