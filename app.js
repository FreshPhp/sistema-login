
const fs = require('fs')
const users = JSON.parse(fs.readFileSync('./db/acess.json'));
const form = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();


  const user = users.find(
    (u) => u.username === username.value && u.password === password.value
  );

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "home.html";
    localStorage.setItem("isLoggedIn", true);
  } else {
    alert("Usuário ou senha incorretos.");
  }
});
