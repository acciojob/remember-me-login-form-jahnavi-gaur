let form = document.querySelector('form');
let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let checkbox = document.querySelector('#checkbox');
let existingBtn = document.querySelector('#existing');

// Show existing button if saved
if (localStorage.getItem("username") && localStorage.getItem("password")) {
  existingBtn.style.display = "block";
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let username = usernameInput.value;
  let password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

existingBtn.addEventListener("click", function() {
  let savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
