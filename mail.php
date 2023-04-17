<?php

$name = $_POST["name"]; // input name="name"
$from = $_POST["email"]; // input name="email"
$phone = $_POST["phone"]; // input name="phone"
$subject = "Wiadomość z formularza na stronie www.partnerppoz.pl";
$to = "abuk111@op.pl"; // adres, na który ma zostać wysłany mail
$message = $_POST["msg"]; // textarea name="msg"

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "Telefon: " . $phone . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
$headers .= "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: /kontakt.html?mail_status=sent"); // jeśli formularz jest na stronie głównej, zmień na index.html
} else {
    header("Location: /kontakt.html?mail_status=error"); // jeśli formularz jest na stronie głównej, zmień na index.html
}