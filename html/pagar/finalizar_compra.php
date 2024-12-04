<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = htmlspecialchars($_POST['email']);
    $nombre = htmlspecialchars($_POST['nombre']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $direccion = htmlspecialchars($_POST['direccion']);
    $metodo_pago = htmlspecialchars($_POST['metodo_pago']);
} else {
    header("Location: formulario.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compra Finalizada</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>¡Gracias por tu compra!</h1>
        <p><strong>Nombre:</strong> <?= $nombre; ?></p>
        <p><strong>Correo:</strong> <?= $email; ?></p>
        <p><strong>Teléfono:</strong> <?= $telefono; ?></p>
        <p><strong>Dirección:</strong> <?= $direccion; ?></p>
        <p><strong>Método de Pago:</strong> <?= $metodo_pago; ?></p>
    </div>
</body>
</html>
