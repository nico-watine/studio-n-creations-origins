<?php 
$ToEmail = 'njwatine@gmail.com'; 
$EmailSubject = "Wedding RSVP"."\n"; 
$mailheader = "From: " . "Engagement Website" . "\n";
$MESSAGE_BODY = "Guest Name ::" . "\n" . $_POST["guest-name"] . "\n"; 
$MESSAGE_BODY .= "Guest Email :: " . "\n" . $_POST["guest-email"]."\n";
$MESSAGE_BODY .= "Guest Attendance ::" . "\n" . $_POST["attendance-status"] . "\n";
$MESSAGE_BODY .= "+1 Attendance ::" . "\n" . $_POST["plus-one-status"] . "\n";
$MESSAGE_BODY .= "+1 Name ::" . "\n" . $_POST["plus-one-name"] . "\n";
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Error!"); 

header("Location: /wedding-details#thank-you");
?>

