
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCRXVNLEgmHgwcrY10Q6dqDxqDOTA8N91I",
    authDomain: "final-auth-2271d.firebaseapp.com",
    projectId: "final-auth-2271d",
    storageBucket: "final-auth-2271d.appspot.com",
    messagingSenderId: "829416939498",
    appId: "1:829416939498:web:0845b593e6160a664e5c93"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;

  const submit = document.getElementById("submit"); 
  submit.addEventListener("click",function(event) {
  event.preventDefault();
  });



const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

