<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: GET, POST");  // Sadece GET ve POST metodlarına izin verir
    session_start();
    require_once ('MysqliDb.php');
    require_once ('config.php');
    require_once ('api.class.php');
    $api=new api();
    $body= $api->getBody(file_get_contents("php://input"));
    if (isset($body->token)) {
        $courses=$api->getAllCourses();
        $retData = $courses;
    } else {
        $retData = $body;
    }
    echo json_encode($retData);
?>
