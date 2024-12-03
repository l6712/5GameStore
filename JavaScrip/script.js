function abrir(){
    document.getElementById("vent").style.display="block";
}

function cerrar(){
    document.getElementById("vent").style.display="none";
}

//-----------------------------------------------------------------------------------------------

let slideIndex = 0;
mostrarSlides();

function moverSlides(n) {
    slideIndex += n;
    mostrarSlides();
}

function mostrarSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

 //-------------------------------------------------------------------------//

// Ejemplo de validación simple de formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        event.preventDefault();
        document.getElementById("error-message").textContent = "Todos los campos son obligatorios.";
    }
});

//------------------------------------------------------------------

    document.getElementById('busqueda').addEventListener('input', function() {
        var searchQuery = this.value.toLowerCase();
        var products = document.querySelectorAll('.producto');

        products.forEach(function(product) {
            var productName = product.getElementsByTagName('h3')[0].textContent.toLowerCase();
            if (productName.includes(searchQuery)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
