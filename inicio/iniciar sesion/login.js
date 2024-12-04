document.getElementById("loginForm").addEventListener("submit", function(event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (email.trim() === "") {
        event.preventDefault();
        errorMessage.textContent = "El correo electrónico no puede estar vacío.";
    } else if (password.trim() === "") {
        event.preventDefault();
        errorMessage.textContent = "La contraseña no puede estar vacía.";
    }
});
