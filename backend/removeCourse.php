<?php
    session_start();
    require_once ('MysqliDb.php');
    require_once ('config.php');
    require_once ('api.class.php');
    $api=new api();
    $body= $api->getBody(file_get_contents("php://input"));
    if (isset($body->token)) {
        $addCourse=$api->removeStudentFromCourse($body->student_id, $body->course_id);
        $retData = $addCourse;
    } else {
        $retData = $body;
    }
    echo json_encode($retData);
?>
