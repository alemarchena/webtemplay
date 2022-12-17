<?php
   require 'vendor/autoload.php';
 
   use PHPMailer\PHPMailer\PHPMailer;

    $nombreempresa = "Templay Studios";

    $nombreyapellido = $_POST["nya"];
    $emailcliente = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = 0;
    $mail->Host = 'smtp.hostinger.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'respuesta-automatica@templaystudios.com';
    $mail->Password = '';
    
    //Mensaje al cliente
    $mail->setFrom('respuesta-automatica@templaystudios.com', 'Servidor');
    $mail->addAddress("". $emailcliente."","". $nombreyapellido . "");
    $mail->AddBCC('materialtemplay@gmail.com','Ale Marchena'); //Con copia oculta a templay studios
    $mail->Subject = 'Mensaje recibido por ' . $nombreempresa;
    $mail->msgHTML(file_get_contents('message.html'), __DIR__);
    $mail->Body = 'Hemos recibido su mensaje, aquí le entregamos una copia del mismo el cual dice : ' . $mensaje ;
   
  
    //$mail->addAttachment('test.txt');
    if (!$mail->send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'The email message was sent.';
    }
?>