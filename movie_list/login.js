async function login(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(email, password);
}

let signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit", login);
