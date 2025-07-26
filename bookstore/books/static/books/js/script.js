document.addEventListener("DOMContentLoaded", function () {
  const body = document.getElementById("mainBody");
  const toggle = document.getElementById("modeToggle");
  const label = document.getElementById("modeLabel");

  if (!body || !toggle || !label) {
    console.log("One or more toggle elements missing.");
    return;
  }

  // Load mode from localStorage
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
    label.textContent = "Dark Mode";
  } else {
    label.textContent = "Light Mode";
  }

  // Toggle handler
  toggle.addEventListener("change", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("mode", "dark");
      label.textContent = "Dark Mode";
    } else {
      localStorage.setItem("mode", "light");
      label.textContent = "Light Mode";
    }
  });
});



