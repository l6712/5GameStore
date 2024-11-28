function agregarAlCarrito(producto, precio) {
    let carrito = document.getElementById('carrito');
    let nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = `${producto} - $${precio.toFixed(2)}`;
    carrito.appendChild(nuevoProducto);

    let total = document.getElementById('total');
    let nuevoTotal = parseFloat(total.textContent.split('$')[1]) + precio;
    total.textContent = `Total: $${nuevoTotal.toFixed(2)}`;
}