function validEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]+))$/;
    return re.test(email);
  }
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('typeEmailX');
const passwordInput = document.getElementById('typePasswordX');
const signInButton = document.querySelector('button[type="submit"]');
  
signInButton.addEventListener('click', function(event) {
    event.preventDefault(); 
  
const name = nameInput.value;
const email = emailInput.value;
const password = passwordInput.value;
  
if (name.length < 5) {
    alert('Name must be longer than 5 characters');
      return;
    }
  
if (password.length < 8) {
    alert('Password must be longer than 8 characters');
      return;
    }
  
    if (!validateEmail(email)) {
        alert('Invalid email format');
      return;
    }
  
console.log('Sign-in attempt:', { name, email, password });
alert('Sign-in successful (simulated)');
    window.location.href = "profile.html"; 
  });
  
  