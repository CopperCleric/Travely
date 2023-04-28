const registerForm = document.querySelector('#register-form');
const usernameInput = registerForm.querySelector('input[name="username"]');
// const emailInput = registerForm.querySelector('input[name="email"]');
const passwordInput = registerForm.querySelector('input[name="password"]');
const confirmPasswordInput = registerForm.querySelector('input[name="confirm-password"]');

registerForm.addEventListener('submit', (event) => {
event.preventDefault();

// Username constraints
if (usernameInput.value.length < 3) {
    alert('Username must be at least 3 characters long');
    return;
}

// Email constraints
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// if (!emailRegex.test(emailInput.value)) {
//     alert('Email must be a valid email address');
//     return;
// }

// Password constraints
if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
}
if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match');
    return;
}

// Submit the form if all constraints pass
registerForm.submit();
});



// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   window.location.href="travel.html";
//   window.event.returnValue=false;
//   //window.navigate("travel.html");
// });