const views = {
  signup: document.getElementById('signupView'),
  login: document.getElementById('loginView'),
};

const formElements = {
  signup: document.getElementById('signupForm'),
  login: document.getElementById('loginForm'),
};

function showView(viewName) {
  Object.entries(views).forEach(([name, element]) => {
    element.classList.toggle('active', name === viewName);
  });
}

function wireViewSwitchActions() {
  document.querySelectorAll('[data-target]').forEach((button) => {
    button.addEventListener('click', () => {
      showView(button.dataset.target);
    });
  });
}

function wireFormActions() {
  formElements.signup.addEventListener('submit', (event) => {
    event.preventDefault();
    showView('login');
  });

  formElements.login.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Logged in! This is an Aux UI clone for app flow design.');
  });
}

wireViewSwitchActions();
wireFormActions();
