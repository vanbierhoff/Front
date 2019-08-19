<?php
require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->CharSet = 'utf-8';


$name = $_POST['name'];
$phone = $_POST['phone'];

if($mail == ''){
    echo "Заполните все поля";
} else {

    $mail->isSMTP();                                      
    $mail->Host = 'smtp.mail.ru';                                                                                            // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                              
    $mail->Username = 'dobprint@mail.ru'; // 
    $mail->Password = 'rbPr1ntas'; // 
    $mail->SMTPSecure = 'ssl';                            
    $mail->Port = 465; // 

    $mail->setFrom('dobprint@mail.ru'); // 
    $mail->addAddress('theloals@mail.ru');     
//$mail->addAddress('ellen@example.com');              
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');        
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    
    $mail->isHTML(true);                                

    $mail->Subject = 'Заявка с тестового сайта';
    $mail->Body = '' . $name . ' оставил заявку, его телефон ' . $phone;
    $mail->AltBody = '';
    if (!$mail->send()) {
        echo 'Error';
    } else {
        echo "Почта отправлена";
    }
}



