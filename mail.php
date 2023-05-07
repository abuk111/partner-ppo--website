<?php 

    $secretKey = '6LeAUsolAAAAAAttaV129vXhB8PXQRqT-TKhV75C';
    $token = $_POST['g-recaptcha-response'];
    $ip = $_SERVER['REMOTE_ADDR'];
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = array('secret' => $secretKey, 'response' => $token, 'remoteip'=> $ip);

    $options = array('http' => array(
      'method'  => 'POST',
      'content' => http_build_query($data)
    ));

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $response = json_decode($result);



// sprawdź wynik weryfikacji 
if ($response->success && $response->score > 0.5) { // jeśli sukces, kontynuuj obsługę formularza
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
     } else {
      echo "Weryfikacja captcha nie powiodła się"; 
      
      }
     
      

