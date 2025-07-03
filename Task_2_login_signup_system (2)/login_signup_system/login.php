<?php
include('config/config.php');
session_start();
$message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username_email = trim($_POST["username_email"]);
    $password = $_POST["password"];
    if (empty($username_email) || empty($password)) {
        $message = "All fields are required.";
    } else {
        $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ? OR email = ?");
        $stmt->bind_param("ss", $username_email, $username_email);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows == 1) {
            $stmt->bind_result($id, $hashed_password);
            $stmt->fetch();
            if (password_verify($password, $hashed_password)) {
                session_regenerate_id();
                $_SESSION['user_id'] = $id;
                header("Location: dashboard.php");
                exit();
            } else {
                $message = "Incorrect password.";
            }
        } else {
            $message = "User does not exist.";
        }
        $stmt->close();
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="form-container">
    <h2>Login</h2>
    <form method="POST" action="">
        <input type="text" name="username_email" placeholder="Username or Email" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">Login</button>
    </form>
    <p><?php echo $message; ?></p>
    <p>Don't have an account? <a href="signup.php">Signup here</a>.</p>
</div>
</body>
</html>
