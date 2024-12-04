<?php
session_start();
include '../db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    try {
        $sql = "SELECT UsuarioID, Contrasena FROM Usuarios WHERE CorreoElectronico = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $correo);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($usuario_id, $contrasena_bd);
            $stmt->fetch();

            // Verificar la contraseña directamente (no recomendado)
            if ($contrasena === $contrasena_bd) {
                // Contraseña válida: iniciar sesión
                $_SESSION['usuario_id'] = $usuario_id;
                header("Location: ../../carrito/carrito.php");
                exit();
            } else {
                // Contraseña incorrecta
                echo "Contraseña incorrecta.";
            }
        } else {
            // Correo no registrado
            echo "Correo electrónico no registrado.";
        }

        $stmt->close();
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }

    $conn->close();
}
?>

