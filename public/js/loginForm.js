// JS file to handle the logic for user logging in

const loginFormHandler = async (event) => {

    event.preventDefault();

    const user = document.querySelector('#userName-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (user && password) {

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ user, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);