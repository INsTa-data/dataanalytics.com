function checkCredentials() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "password") {
    window.location.href = "home.html";
  } else {
    alert("Incorrect username or password. Please try again.");
  }
}