<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name_logist = $_POST['name_logist'];
$number_logist = $_POST['number_logist'];
$logist_default = $_POST['logist_default'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'nikolas-52@inbox.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '18thfijdrjkz272729'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('nikolas-52@inbox.ru'); // от кого будет уходить письмо?
$mail->addAddress('nickolasdzr@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ звонка с главной страницы';
$mail->Body    = 'Кто-то по имени - ' .$name_logist. '<br>' .'Просит перезвонить на номер - '  .$number_logist. '<br>'. 'Его интересует вакансия ' .$logist_default;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>