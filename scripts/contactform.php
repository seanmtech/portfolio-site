<?php
    $name = $_POST['name'];
    $mailFrom = $_POST['fromEmail'];
    $message = $_POST['message'];
    $messengerEmail = 'seanMattsonPortfolio@heyanewlead.com';
    $emailSubject = 'New Contact Form Submission';
    $mailTo = "seanemattson@yahoo.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;
    mail($mailTo, $emailSubject, $txt, $headers);
    header('Location:http://seanmattson.tech/');
?>