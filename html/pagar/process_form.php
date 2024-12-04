<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = htmlspecialchars($_POST['email']);
    $nombre = htmlspecialchars($_POST['nombre']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $direccion = htmlspecialchars($_POST['direccion']);
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
    <title>Resumen de Pedido</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Resumen del Pedido</h1>
        <p><strong>Correo Electrónico:</strong> <?= $email; ?></p>
        <p><strong>Nombre:</strong> <?= $nombre; ?></p>
        <p><strong>Teléfono:</strong> <?= $telefono; ?></p>
        <p><strong>Dirección:</strong> <?= $direccion; ?></p>

        <h2>Método de Pago</h2>
        <form action="finalizar_compra.php" method="POST">
            <input type="hidden" name="email" value="<?= $email; ?>">
            <input type="hidden" name="nombre" value="<?= $nombre; ?>">
            <input type="hidden" name="telefono" value="<?= $telefono; ?>">
            <input type="hidden" name="direccion" value="<?= $direccion; ?>">

            <label>
                <input type="radio" name="metodo_pago" value="tarjeta" required> Tarjeta
            </label>
            <label>
                <input type="radio" name="metodo_pago" value="paypal" required> PayPal
            </label>
            <label>
                <input type="radio" name="metodo_pago" value="mercadopago" required> Mercado Pago
            </label>
            <button type="submit">Finalizar compra</button>
        </form>
    </div>
</body>
</html>
