<?php
    session_start();
    require_once ('MysqliDb.php');
    require_once ('config.php');
    require_once ('api.class.php');
    $api=new api();
    $body= $api->getBody(file_get_contents("php://input"));
    if ($body->status && isset($body->username) && isset($body->password)) {
        $login=$api->login($body->username,$body->password);
        $retData = $login;
    } else {
        $retData = $body;
    }
    echo json_encode($retData);
?>

