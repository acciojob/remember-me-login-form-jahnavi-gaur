let userNameBox = document.querySelector('#username');
let passWordBox = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
let form = document.querySelector('form');
let existingBtn = document.querySelector('#existing');

// Check on page load if credentials exist
let savedData = JSON.parse(localStorage.getItem('credentials'));

if (savedData) {
  existingBtn.style.display = 'block';
}

// Handle form submit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload

  let username = userNameBox.value;
  let password = passWordBox.value;

  alert(`Logged in as ${username}`);

  if (checkBox.checked) {
    // Save credentials
    localStorage.setItem(
      'credentials',
      JSON.stringify({ username, password })
    );
    existingBtn.style.display = 'block';
  } else {
    // Remove credentials
    localStorage.removeItem('credentials');
    existingBtn.style.display = 'none';
  }
	userNameBox.value = '';
	passWordBox.value = '';
});

// Existing user login
existingBtn.addEventListener('click', function () {
  let savedData = JSON.parse(localStorage.getItem('credentials'));

  if (savedData) {
    alert(`Logged in as ${savedData.username}`);
  }
});
