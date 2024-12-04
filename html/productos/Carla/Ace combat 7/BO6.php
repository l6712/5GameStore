<?php
// Configuración de la conexión
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "5gamestore";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

session_start();

if (!isset($_SESSION['usuario_id'])) {
    header("Location: ../inicio/iniciar sesion/login.html");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Usamos mysqli_real_escape_string para prevenir inyección SQL
    $productoSeleccionado = $conn->real_escape_string($_POST['producto']);
    
    if (!empty($productoSeleccionado)) {
        echo "Agregaste este producto a tu carrito: " . htmlspecialchars($productoSeleccionado);
    }
}
$conn->close();
?>



