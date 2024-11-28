document.getElementById("paymentForm").addEventListener("submit", function(event) {
    var cardNumber = document.getElementById("card_number").value;
    var cardName = document.getElementById("card_name").value;
    var expiryDate = document.getElementById("expiry_date").value;
    var cvv = document.getElementById("cvv").value;
    var errorMessage = document.getElementById("error-message");

    if (!validateCardNumber(cardNumber)) {
        event.preventDefault();
        errorMessage.textContent = "El número de tarjeta es inválido. Por favor, inténtalo de nuevo.";
    } else if (cardName.trim() === "") {
        event.preventDefault();
        errorMessage.textContent = "El nombre en la tarjeta no puede estar vacío.";
    } else if (!validateExpiryDate(expiryDate)) {
        event.preventDefault();
        errorMessage.textContent = "La fecha de expiración es inválida. Por favor, inténtalo de nuevo.";
    } else if (!validateCVV(cvv)) {
        event.preventDefault();
        errorMessage.textContent = "El CVV es inválido. Por favor, inténtalo de nuevo.";
    }
});

function validateCardNumber(cardNumber) {
    // Implementación básica de validación de tarjeta de crédito (Luhn Algorithm)
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(cardNumber)) return false;

    return luhnCheck(cardNumber);
}

function luhnCheck(val) {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
        let intVal = parseInt(val.substr(i, 1));
        if (i % 2 === 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) === 0;
}

function validateExpiryDate(expiryDate) {
    var regex = new RegExp("^(0[1-9]|1[0-2])\/?([0-9]{2})$");
    if (!regex.test(expiryDate)) return false;

    var parts = expiryDate.split("/");
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[1], 10);

    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1;
    var currentYear = currentDate.getFullYear() % 100; // Last two digits

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return false;
    }

    return true;
}

function validateCVV(cvv) {
    var regex = new RegExp("^[0-9]{3,4}$");
    return regex.test(cvv);
}
