<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$vacancy_name = $_POST['vacancy_name'];
$vacancy_email = $_POST['vacancy_email'];
$vacancy_inp = $_POST['vacancy_inp'];
$vacancy_comment = $_POST['vacancy_comment'];

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

$mail->Subject = 'У кого-то есть вопросы. Сообщение с формы на странице вакансий';
$mail->Body    = 'Кто-то по имени '.$vacancy_name.'<br>'. 'его телефон или email: ' .$vacancy_email. '<br>'. 'его интересует вакансия '.$vacancy_inp. 'и его комментарий: '.$vacancy_comment;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>