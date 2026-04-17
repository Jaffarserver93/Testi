const signupView = document.getElementById('signupView');
const loginView = document.getElementById('loginView');

function showView(viewName) {
  const showingSignup = viewName === 'signup';
  signupView.classList.toggle('active', showingSignup);
  loginView.classList.toggle('active', !showingSignup);
}

document.querySelectorAll('[data-target]').forEach((button) => {
  button.addEventListener('click', () => {
    showView(button.dataset.target);
  });
});

document.getElementById('signupForm').addEventListener('submit', (event) => {
  event.preventDefault();
  showView('login');
});

document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Logged in! This is a UI clone.');
});
