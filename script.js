//your JS code here. If required.
window.onload = function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");
  const form = document.getElementById("loginForm");

  // Check if credentials exist in localStorage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  }

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) return;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      // Save credentials
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "block";
    } else {
      // Remove saved credentials
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }

    // Clear inputs after submit
    form.reset();
  });

  // Handle existing user login
  existingBtn.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      alert(`Logged in as ${savedUser}`);
    }
  });
};
