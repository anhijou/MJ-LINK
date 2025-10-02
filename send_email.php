<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;


$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $company = htmlspecialchars($_POST['company']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = $_ENV['SMTP_HOST'];  // Use your SMTP server
        $mail->SMTPAuth   = true;
         $mail->Username   = $_ENV['SMTP_USER']; // Your email
        $mail->Password   = $_ENV['SMTP_PASS']; // App password if Gmail
        $mail->SMTPSecure = $_ENV['SMTP_SECURE'];               // Use 'ssl' for port 465
        $mail->Port       = $_ENV['SMTP_PORT'];

        // Recipients
        $mail->setFrom($email, $firstName);
        $mail->addAddress('anhijou.1@gmail.com', 'MJLINK');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "
            <b>Name:</b> $firstName $lastName<br>
            <b>Email:</b> $email<br>
            <b>Phone:</b> $phone<br>
            <b>Company:</b> $company<br>
            <b>Message:</b><br>$message
        ";

        $mail->send();




     
        echo 'Message sent successfully!';
    } catch (Exception $e) {
        // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                echo "Message could not be sent. try again.";

    }

       // Send confirmation email to the user
        $confirmation = new PHPMailer(true);

        try {
       

             $mail->isSMTP();
       $mail->Host       = $_ENV['SMTP_HOST'];  // Use your SMTP server
        $mail->SMTPAuth   = true;
         $mail->Username   = $_ENV['SMTP_USER']; // Your email
        $mail->Password   = $_ENV['SMTP_PASS']; // App password if Gmail
        $mail->SMTPSecure = $_ENV['SMTP_SECURE'];               // Use 'ssl' for port 465
        $mail->Port       = $_ENV['SMTP_PORT'];

            $confirmation->setFrom($email, $firstName);
            $confirmation->addAddress($email, $firstName); // user email

            $confirmation->isHTML(true);
            $confirmation->Subject = 'Your message was received!';
            $confirmation->Body    = "
        Hi $firstName,<br><br>
        Thank you for contacting MJLINK. We have received your message and will get back to you shortly.<br><br>
        Best regards,<br>
        MJLINK Team
    ";

            $confirmation->send();
        } catch (Exception $e) {
            // You can log the error but don’t show to the user
        }
}
