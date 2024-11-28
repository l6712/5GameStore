-- Crear la base de datos
CREATE DATABASE tienda_juegos;

-- Usar la base de datos creada
USE tienda_juegos;

-- Crear la tabla de productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    imagen VARCHAR(255)
);

-- Insertar datos de ejemplo
INSERT INTO productos (nombre, descripcion, precio, imagen)
VALUES
('Juego A', 'Descripción del Juego A', 29.99, 'https://link-a-imagen/juegoA.jpg'),
('Juego B', 'Descripción del Juego B', 49.99, 'https://link-a-imagen/juegoB.jpg'),
('Juego C', 'Descripción del Juego C', 19.99, 'https://link-a-imagen/juegoC.jpg');
