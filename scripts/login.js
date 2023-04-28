const loginForm = document.querySelector('#login-form');
const usernameInput = loginForm.querySelector('input[name="username"]');
const passwordInput = loginForm.querySelector('input[name="password"]');
const confirmPasswordInput = registerForm.querySelector('input[name="confirm-password"]');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Username constraints
  if (usernameInput.value.length < 3) {
    alert('Username must be at least 3 characters long');
    return;
  }

  // Password constraints
  if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }

  // Submit the form if all constraints pass
  loginForm.submit();
});

