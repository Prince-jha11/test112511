const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

loginBtn.addEventListener("click", handleLogin);

function handleLogin() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    errorMsg.style.display = "block";
    return;
  }

  errorMsg.style.display = "none";

  // Mock login behavior
  alert("Mock login successful! (No real authentication)");
}