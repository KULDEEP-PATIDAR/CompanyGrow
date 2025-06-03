const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load stored preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

// Toggle logic
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Switch icon
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
