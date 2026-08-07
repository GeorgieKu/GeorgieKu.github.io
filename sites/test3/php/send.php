<?php

$recipient = 'justsmilestom@yandex.ru';

$isAjax = (
    (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
    || (!empty($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false)
);

function respond($success, $message, $isAjax) {
    if ($isAjax) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['success' => $success, 'message' => $message]);
        exit;
    }

    $redirect = $_SERVER['HTTP_REFERER'] ?? '/';
    $separator = strpos($redirect, '?') !== false ? '&' : '?';
    header('Location: ' . $redirect . $separator . ($success ? 'sent=1' : 'sent=0'));
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    respond(false, 'Метод не поддерживается', $isAjax);
}

// Honeypot: bots fill hidden fields, real users never see or fill this input.
if (!empty($_POST['website'])) {
    respond(true, 'Заявка отправлена', $isAjax);
}

$name = trim(strip_tags($_POST['name'] ?? ''));
$phone = trim(strip_tags($_POST['phone'] ?? ''));

if ($name === '' || $phone === '') {
    respond(false, 'Заполните имя и телефон', $isAjax);
}

$name = mb_substr($name, 0, 100);
$phone = mb_substr($phone, 0, 30);

$subject = '=?UTF-8?B?' . base64_encode('Новая заявка с сайта Just Smile') . '?=';

$body = "Новая заявка с сайта Just Smile\n\n";
$body .= "Имя: {$name}\n";
$body .= "Телефон: {$phone}\n";
$body .= 'Дата: ' . date('d.m.Y H:i') . "\n";

$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$host = preg_replace('/^www\./', '', $host);
$fromEmail = 'noreply@' . $host;

$headers = "From: Just Smile <{$fromEmail}>\r\n";
$headers .= "Reply-To: {$fromEmail}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($recipient, $subject, $body, $headers);

respond($sent, $sent ? 'Заявка отправлена' : 'Не удалось отправить заявку, попробуйте позже', $isAjax);
