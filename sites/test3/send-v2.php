<?php
// Проверяем, что это POST запрос
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /');
    exit;
}

// Проверяем, что все обязательные поля заполнены
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Если хотя бы одно поле пустое - редирект в корень
if (empty($name) || empty($email) || empty($message)) {
    header('Location: /');
    exit;
}

// Пауза 1 секунда
sleep(1);

// Редирект на страницу успеха
header('Location: /v2-success/index.php');
exit;
?>