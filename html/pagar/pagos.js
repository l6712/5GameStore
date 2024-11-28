function validatePostalCode() {
    const postalInput = document.getElementById('postal');
    const postalCode = postalInput.value;

    // Aquí puedes añadir tu lógica de validación
    const isValid = /^[0-9]{5}$/.test(postalCode); // Ejemplo de validación para un código postal de 5 dígitos

    if (isValid) {
        alert('El código postal es válido.');
    } else {
        alert('El código postal no es válido. Por favor, introduce un código postal correcto.');
    }
}