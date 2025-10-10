const form = document.querySelector("#login-form");
const existingBtn = document.querySelector("#existing");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const rememberCheckbox = document.querySelector("#checkbox");

// Ensure localStorage is empty initially
localStorage.removeItem("username");
localStorage.removeItem("password");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  alert(`Logged in as ${username}`);

  // If "Remember me" is checked, save in localStorage
  if (rememberCheckbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }
});

// Function for test case: loginUser(username, password)
function loginUser(u, p) {
  localStorage.setItem("username", u);
  localStorage.setItem("password", p);
  existingBtn.style.display = "block";
  existingBtn.textContent = "Login as existing user";
}
