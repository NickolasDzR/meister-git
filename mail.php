<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$company = $_POST['company'];
$your_point = $_POST['your-point'];
$cargo_weight = $_POST['cargo-weight'];
$phone_email = $_POST['phone-email'];
$destination_point = $_POST['destination-point'];
$comment = $_POST['comment'];

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

$mail->Subject = 'Заявка с сайта meister-tk';
$mail->Body    = '' .$company . ' оставил заявку ' .$your_point. '<br>его email/телефон: ' .$cargo_weight. 'Им нужно перевезти груз в' .$phone_email. 'картошка с пюрешкой' .$destination_point. 'и макарошки' .$comment;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>