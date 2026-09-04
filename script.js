const toggleButton = document.getElementById("theme-toggle");
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  toggleButton.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Beim Laden: gespeichertes Theme übernehmen, falls vorhanden
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
}

toggleButton.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
