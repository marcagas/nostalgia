<?php

function send_json_response($type, $httpcode, $message, $data = array()) {
    if ($type == ERROR_LOG) {
        // error response
        $json = array('code' => $httpcode, 'message' => $message, 'data' => $data);
    } else {
        // success response
        $json = array('code' => $httpcode, 'message' => $message, 'data' => $data);
    }

    echo json_encode($json);
}

function get_post_var($key) {
    if (array_key_exists($key, $_POST) === true) {
        return trim($_POST[$key]);
    } else {
        return NULL;
    }
}

?>
