// === REGISTRATION FORM ===
const registerForm = document.getElementById('reg_form');

if (registerForm) {  // ← SAFETY CHECK
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('reg_username').value;
        const password = document.getElementById('reg_password').value;
        const confirmpassword = document.getElementById('reg_confirm_password').value;

        const message = document.getElementById('message');
        
        if (username === '' || password === '' || confirmpassword === '') {
            message.textContent = 'All fields are required';
            return;
        }

        if (password.length < 6) {
            message.textContent = 'Password must be at least 6 characters';
            return;
        }

        if (password !== confirmpassword) {
            message.textContent = 'Passwords do not match';
            return;
        }

        message.textContent = 'Validation passed — now sending to server…';
    });
}


// === LOGIN FORM ===
const loginForm = document.getElementById('login_form');

if (loginForm) {  // ← SAFETY CHECK
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('log_username').value;
        const password = document.getElementById('log_password').value;

        const message = document.getElementById('message');

        if (username === '' || password === '') {
            message.textContent = 'All fields are required';
            return;
        }

        if (password.length < 6) {
            message.textContent = 'Password must be at least 6 characters';
            return;
        }

        message.textContent = 'Validation passed — now sending to server…';
    });
}