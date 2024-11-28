const cards = document.getElementById('cards');
const templateCard = document.getElementById('template-card').content;
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito').content;
const fragment = document.createDocumentFragment();
let carrito = {};

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    // Recuperamos el carrito desde localStorage si existe
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        pintarCarrito();
    }
});

// Evento de clic para agregar productos al carrito
cards.addEventListener('click', e => {
    if (e.target.classList.contains('btn-dark')) {
        addCarrito(e.target.parentElement);
    }
    e.stopPropagation();
});

// Evento de clic para manejar las acciones (+/-) del carrito
items.addEventListener('click', e => {
    btnAccion(e);
});

const fetchData = async () => {
    try {
        // Cargamos los productos desde el JSON
        const res = await fetch('productos.json');
        const data = await res.json();
        pintarCard(data);
    } catch (error) {
        console.log(error);
    }
};

const pintarCard = data => {
    data.forEach(item => {
        // Llenamos las tarjetas con la información de cada producto
        templateCard.querySelector('h5').textContent = item.title;
        templateCard.querySelector('p').textContent = item.precio;
        templateCard.querySelector('img').setAttribute('src', item.thumbnailUrl);
        templateCard.querySelector('.btn-dark').dataset.id = item.id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};

// Función que agrega un producto al carrito
const addCarrito = item => {
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('p').textContent,
        id: item.querySelector('.btn-dark').dataset.id,
        cantidad: 1
    };

    // Si el producto ya está en el carrito, solo actualizamos la cantidad
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }

    carrito[producto.id] = { ...producto };

    // Actualizamos la vista del carrito
    pintarCarrito();
    mostrarMensaje('Producto agregado al carrito!');
};

// Función para pintar el carrito
const pintarCarrito = () => {
    items.innerHTML = '';
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id;
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title;
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id;
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id;
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio;

        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    });

    items.appendChild(fragment);

    pintarFooter();

    // Guardamos el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

// Función para pintar el pie del carrito
const pintarFooter = () => {
    footer.innerHTML = '';
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `;
        return;
    }

    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0);

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad;
    templateFooter.querySelector('span').textContent = nPrecio;

    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);

    const btnVaciar = document.getElementById('vaciar-carrito');
    btnVaciar.addEventListener('click', () => {
        carrito = {};
        pintarCarrito();
    });
};

// Función para manejar las acciones de los botones (+/-) del carrito
const btnAccion = e => {
    if (e.target.classList.contains('btn-info')) {
        // Incrementar cantidad
        const producto = carrito[e.target.dataset.id];
        producto.cantidad++;
        carrito[e.target.dataset.id] = { ...producto };
        pintarCarrito();
    }

    if (e.target.classList.contains('btn-danger')) {
        // Decrementar cantidad o eliminar producto
        const producto = carrito[e.target.dataset.id];
        producto.cantidad--;
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id];
        }
        pintarCarrito();
    }

    e.stopPropagation();
};

// Función para mostrar un mensaje temporal de "Producto agregado"
const mostrarMensaje = mensaje => {
    const mensajeElemento = document.createElement('div');
    mensajeElemento.classList.add('alert', 'alert-success');
    mensajeElemento.textContent = mensaje;
    document.body.appendChild(mensajeElemento);

    setTimeout(() => {
        mensajeElemento.remove();
    }, 2000); // El mensaje desaparecerá después de 2 segundos
};
