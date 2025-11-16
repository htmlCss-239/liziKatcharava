const container = document.getElementById('container');
const registerBtn = document.getElementById('register'); 
const loginBtn = document.getElementById('login');       

if (registerBtn) {
  registerBtn.addEventListener('click', () => {
    container.classList.add("active");
  });
}

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
  });
}

const showSignUp = document.getElementById('showSignUp');
const showSignIn = document.getElementById('showSignIn');

if (showSignUp) {
  showSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('active');
  });
}

if (showSignIn) {
  showSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('active'); 
  });
}
