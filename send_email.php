<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

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
        $mail->Subject = "New Message Form $company";
        $mail->Body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: auto;
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 8px;
      background: #f9f9f9;
    }
    h2 {
      text-align: center;
      color: #444;
    }
    .field {
      margin-bottom: 10px;
    }
    .label {
      font-weight: bold;
      color: #222;
    }
    .value {
      margin-left: 5px;
    }
    .message {
      margin-top: 15px;
      padding: 10px;
      background: #fff;
      border-left: 4px solid #007BFF;
      white-space: pre-line;
    }
  </style>
</head>
<body>
  <div class='container'>
    <h2>New Contact Form Submission</h2>
    <div class='field'><span class='label'>Name:</span><span class='value'>$firstName $lastName</span></div>
    <div class='field'><span class='label'>Email:</span><span class='value'>$email</span></div>
    <div class='field'><span class='label'>Phone:</span><span class='value'>$phone</span></div>
    <div class='field'><span class='label'>Company:</span><span class='value'>$company</span></div>
    <div class='field message'>
      <span class='label'>Message:</span><br>
      $message
    </div>
  </div>
</body>
</html>
";

        $mail->send();




     
        echo 'Message sent successfully!';
    } catch (Exception $e) {
        // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                echo "Message could not be sent. try again.";

    }

      
}
