const getStartedButton = document.getElementById('getStartedButton');
const loginButton = document.getElementById('loginButton');

if (getStartedButton) {
  getStartedButton.addEventListener('click', () => {
    alert('Get Started clicked. Next step: onboarding flow.');
  });
}

if (loginButton) {
  loginButton.addEventListener('click', () => {
    alert('Log in clicked. Next step: login flow.');
  });
}
