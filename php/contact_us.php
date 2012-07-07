<?php

  require_once('config.php');

  if (empty($_POST) === false) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $contact = $_POST['contact'];

    $email_to = 'info@visualposters.com.au';
    $email_from = 'info@visualposters.com.au';

    echo json_encode(array('code' => 200));
  } else {
    
  }

?>
