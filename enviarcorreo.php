<?php
    require 'vendor/autoload.php';
    require 'modelo/clave.php';

 
    use PHPMailer\PHPMailer\PHPMailer;

    $nombreempresa = "Templay Studios";

    $nombreyapellido = $_POST["nya"];
    $emailcliente = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    //Datos de acceso al servidor
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = 0;
    $mail->Host = 'smtp.hostinger.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'contacto@templaystudios.com';
    $mail->Password = $clave;
   
    //Mensaje a la empresa
    $mail->setFrom('contacto@templaystudios.com', 'Servidor '. $nombreempresa);
    $mail->addReplyTo($emailcliente, $nombreyapellido); //a quien responder
    $mail->addAddress('alemarchena@gmail.com','Responsable de ' . $nombreempresa);
    $mail->Subject = 'Mensaje web de ' . $nombreempresa;
    $mail->msgHTML(file_get_contents('message.html'), __DIR__);
    $mail->Body = "Mensaje: " .$mensaje . " - Contacto: " . $nombreyapellido ." - email: " . $emailcliente ." - Teléfono:" . $telefono;


   //$mail->addAttachment('test.txt');
   if (!$mail->send()) {
       echo 'Mailer Error: ' . $mail->ErrorInfo;
   } else {
       echo 'ok';
   }
?>