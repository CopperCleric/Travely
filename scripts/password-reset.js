const passwordResetForm = document.querySelector('#password-reset-form');
const usernameInput = passwordResetForm.querySelector('input[name="username"]');
const oldPasswordInput = passwordResetForm.querySelector('input[name="old-password"]');
const newPasswordInput = passwordResetForm.querySelector('input[name="new-password"]');

passwordResetForm.addEventListener('submit', (event) => {
event.preventDefault();

// Username constraints
if (usernameInput.value.length < 3) {
    alert('Username must be at least 3 characters long');
    return;
}

// Password constraints
if (oldPasswordInput.value.length < 8) {
    alert('Old password must be at least 8 characters long');
    return;
}

// Password constraints
if (newPasswordInput.value.length < 8) {
    alert('New password must be at least 8 characters long');
    return;
}


// Submit the form if all constraints pass
passwordResetForm.submit();
});
