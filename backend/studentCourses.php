<?php
    session_start();
    require_once ('MysqliDb.php');
    require_once ('config.php');
    require_once ('api.class.php');
    $api=new api();
    $body= $api->getBody(file_get_contents("php://input"));
    if (isset($body->token)) {
        $courses=$api->getStudentCourses($body->student_id);
        $retData = $courses;
    } else {
        $retData = $body;
    }
    echo json_encode($retData);
?>
