<?php

   // Check for empty fields
   if(empty($_POST['name'])      ||
      empty($_POST['email'])     ||
      empty($_POST['telephone'])       ||
      empty($_POST['message'])   ||
      !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {     
         echo "No arguments Provided!";
         return false;
   }

   // Collect values from form
   $name = $_POST['name'];
   $email = $_POST['email'];
   $telephone = $_POST['telephone'];
   $message = $_POST['message'];

   // Where to send the info to
   $to = "russell2shea@gmail.com";

   // Compile the email
   $email_subject = "Message From $name";
   $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email\n\nPhone: $telephone\n\nMessage:\n$message";
   $headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
   $headers .= "Reply-To: $email";  
   mail($to,$email_subject,$email_body,$headers);
   echo "ok";
   return true;   

      
