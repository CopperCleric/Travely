const passwordResetForm = document.querySelector('#password-reset-form');
const emailInput = passwordResetForm.querySelector('input[name="email"]');
const newPasswordInput = passwordResetForm.querySelector('input[name="new-password"]');
const confirmPasswordInput = passwordResetForm.querySelector('input[name="confirm-password"]');

passwordResetForm.addEventListener('submit', (event) => {
event.preventDefault();


// Email constraints
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
if (!emailRegex.test(emailInput.value)) {
  alert('Email must be a valid email address');
  return;
}

// Password constraints
if (newPasswordInput.value.length < 8) {
    alert('New password must be at least 8 characters long');
    return;
}

if (newPasswordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match');
    return;
}

alert('We have sent you an verification email. Please check.');

// Submit the form if all constraints pass
passwordResetForm.submit();
});
