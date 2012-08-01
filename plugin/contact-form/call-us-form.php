<?php

    require_once('config.php');
    require_once('../functions.php');
    require_once('../phpMailer/class.phpmailer.php');

    $response = array('error' => 0, 'info' => null);
    if ($_POST['call_us']) {
        $values = array (
            'first_name' => $_POST['first_name'],
            'last_name' => $_POST['last_name'],
            'company_name' => $_POST['company_name'],
            'phone_number' => $_POST['phone_number'],
            'email' => $_POST['email'],
            'worst_fear' => $_POST['worst_fear']
        );

        if (isEmpty($values['first_name']) || strcmp($values['first_name'], _def_data_first_name) == 0) {
            $response['error'] = 1;
            $response['info'][] = array('fieldId' => 'first_name', 'message' => _msg_invalid_data_first_name);
        }

        if (isEmpty($values['last_name']) || strcmp($values['last_name'], _def_data_last_name) == 0) {
            $response['error'] = 1;
            $response['info'][] = array('fieldId' => 'last_name', 'message' => _msg_invalid_data_last_name);
        }

        if (isEmpty($values['company_name']) || strcmp($values['company_name'], _def_data_company_name) == 0) {
            $response['error'] = 1;
            $response['info'][] = array('fieldId' => 'company_name', 'message' => _msg_invalid_data_company_name);
        }
        if (isEmpty($values['phone_number']) || strcmp($values['phone_number'], _def_data_phone_number) == 0) {
            $response['error'] = 1;
            $response['info'][] = array('fieldId' => 'phone_number', 'message' => _msg_invalid_data_phone_number);
        }
        if (!validateEmail($values['email']) || strcmp($values['email'], _def_data_email) == 0) {
            $response['error'] = 1;
            $response['info'][] = array('fieldId' => 'email', 'message' => _msg_invalid_data_email);
        }
        if (isEmpty($values['worst_fear']) || strcmp($values['worst_fear'], _def_data_worst_fear) == 0) {
            $response['error'] = 1;
            $response['info'][] = array('fieldId' => 'worst_fear', 'message' => _msg_invalid_data_worst_fear);
        }
    } else if ($_POST['best_package']) {
        $values = array(
            'company_name' => $_POST['company_name'],
            'phone_number' => $_POST['phone_number']
        );
        if (isEmpty($values['company_name']) || strcmp($values['company_name'], _def_data_company_name) == 0) {
            $response['error'] = 1;
            $response['info'][] = array('fieldId' => 'company_name', 'message' => _msg_invalid_data_company_name);
        }
        if (isEmpty($values['phone_number']) || strcmp($values['phone_number'], _def_data_phone_number) == 0) {
            $response['error'] = 1;
            $response['info'][] = array('fieldId' => 'phone_number', 'message' => _msg_invalid_data_phone_number);
        }
    } else if ($_POST['broadcast_package']) {
        $values = array(
            'company_name' => $_POST['company_name'],
            'phone_number' => $_POST['phone_number']
        );
        if (isEmpty($values['company_name']) || strcmp($values['company_name'], _def_data_company_name) == 0) {
            $response['error'] = 1;
            $response['info'][] = array('fieldId' => 'company_name', 'message' => _msg_invalid_data_company_name);
        }
        if (isEmpty($values['phone_number']) || strcmp($values['phone_number'], _def_data_phone_number) == 0) {
            $response['error'] = 1;
            $response['info'][] = array('fieldId' => 'phone_number', 'message' => _msg_invalid_data_phone_number);
        }
    }

    if ($response['error'] == 1) {
        createResponse($response);
    }

    if (isGPC()) {
        $values = array_map('stripslashes', $values);
    }

    $values = array_map('htmlspecialchars', $values);

    if ($_POST['call_us']) {
        $body = include(_template_call_us_path);
    } else if ($_POST['best_package']) {
        $body = include(_template_best_package_path);
    } else if ($_POST['broadcast_package']) {
        $body = include(_template_broadcast_package_path);
    }

    $mail = new PHPMailer();

    $mail->SetFrom(_from_email, _from_name);
    $mail->AddAddress(_to_email, _to_name);

    if (!isEmpty(_smtp_host)) {
        $mail->SMTPAuth = true;
        $mail->Host = _smtp_host;
        $mail->Port = _smtp_port;
        $mail->Username = _smtp_username;
        $mail->Password = _smtp_password;
    }

    $mail->Subject = _subject_email;
    $mail->MsgHTML($body);

    if (!$mail->Send()) {
        $response['error'] = 1;
        $response['info'][] = array('fieldId' => 'contact-send', 'message' => _msg_send_error);
        createResponse($response);
        exit;
    }

    $response['error'] = 0;
    $response['info'][] = array('fieldId' => 'contact-send', 'message' => _msg_send_ok);

    createResponse($response);
    exit;
?>