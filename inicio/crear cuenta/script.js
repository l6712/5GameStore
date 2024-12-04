document.getElementById("registerForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        event.preventDefault();
        errorMessage.textContent = "Las contraseñas no coinciden. Por favor, inténtalo de nuevo.";
    }
});
