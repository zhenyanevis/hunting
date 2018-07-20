<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$soname = $_POST['soname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'yauh.nes@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '$kgkKG87IU)32!'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('yauh.nes@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('penbok99@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на охоту c anfrid.by';
$mail->Body    = '<strong>Имя:</strong> ' .$name. '<br><strong>Фамилия:</strong> ' .$soname. '<br><strong>Почта:</strong> ' .$email. '<br><strong>Телефон:</strong> ' .$phone. '<br><strong>Сообщение:</strong> ' .$message. 
				 '<br><br>Заявка отправлена с сайта <a href="http://www.anfrid.by">anfrid.by</a>';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
}else{
	header('location: thank-you.html');
}
?>