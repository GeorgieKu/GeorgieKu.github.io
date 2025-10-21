<?php
$to = "gera96@inbox.ru";
$subject = "New contact form submission";
$message = "Name: " . $_POST['first_name'] . " " . $_POST['last_name'] . "\n";
$message .= "Email: " . $_POST['email'] . "\n";
$message .= "Phone: " . $_POST['phone'] . "\n";
mail($to, $subject, $message);
echo "Thank you for your submission.";
?>