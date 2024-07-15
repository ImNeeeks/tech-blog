// JS file to handle the logic for user prior to being logged in (will go to homepage, otherwise force them to the login screen)

const loginButton = async () => {
    document.location.replace('/login');
};
document.querySelector('#login').addEventListener('click', loginButton);

const homeButton = async () => {
    document.location.replace('/');
};
document.querySelector('#home').addEventListener('click', homeButton);

const dashboardButton = async () => {
    document.location.replace('/dashboard');
};
document.querySelector('#dashboard').addEventListener('click', dashboardButton);