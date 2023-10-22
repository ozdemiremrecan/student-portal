<?php
    class api{
        private $db;
        private $dbUsername;
        private $dbPassword;
        private $dbHost;
        private $dbName;
        private $username;
        private $password;
        private $config;
        private $token;

        public function __construct() {
            
                global $config;
                $this->config       = $config;
                $this->dbHost       = $config["dbHost"];
                $this->dbUsername   = $config["dbUsername"];
                $this->dbPassword   = $config["dbPassword"];
                $this->dbName       = $config["dbName"];
                $this->username     = $config["username"];
                $this->password     = $config["password"];
                $this->db = new MysqliDb($this->dbHost, $this->dbUsername, $this->dbPassword, $this->dbName );
                if(!$this->db){
                    $retData = $this->errorCreator("601",false);
                }else{
                    $retData["status"]  = true; 
                }
                return $retData;
            
        }

        public function login($username, $password) {
            $user = $this->db->where('username', $username)
                             ->where('password', $password)
                             ->getOne('students');
            if ($user) {
                $retData["student_id"] = $user['student_id'];
                $retData["token"] = $this->createToken();
                $retData["status"] = true;
            } else {
                $retData = $this->errorCreator("101", false);
            }
        
            return (object) $retData;
        }
        
        public function errorCreator($code,$status){
                $retData["description"] = $this->config["error"][$code];
                $retData["code"]        = $code;
                $retData["status"]      = $status;
                return $retData;
        }

        public function createToken(){
                $currentTime = time();
                if(!isset($_SESSION["token"]) || !isset($_SESSION["token_creation_time"]) || ($currentTime - $_SESSION["token_creation_time"] >= 1800)){
                    $token =$this->generateRandomString(16);
                    $this->token = $token;
                    $_SESSION["token"] = $this->token;
                    $_SESSION["token_creation_time"] = $currentTime;
                }
                return $_SESSION["token"];
        }

        public function generateRandomString($length = 10) {
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0,62)];
            }
            return $randomString;
        }

        public function getBody($body){
                $body_arr = json_decode($body, true);
                if ($body_arr) {
                    $retData=$body_arr;
                    $retData["status"] = true;
                }else{
                    $retData = $this->errorCreator("102",false);
                }
                return (object)$retData;
        }

        public function getAllCourses() {
            $courses = $this->db->get('courses');
            
            if ($this->db->count > 0) {
                $retData["courses"] = $courses;
                $retData["status"] = true;
            } else {
                $retData = $this->errorCreator("102", false);
            }
            
            return (object) $retData;
        }

        public function getStudentCourses($studentId) {
            if (!is_numeric($studentId)) {
                $retData = $this->errorCreator("102", false);
                return (object) $retData;
            }
        
            $this->db->where('student_id', $studentId);
            $enrollments = $this->db->get('student_courses');
        
            if ($this->db->count > 0) {
                $courses = array();
                foreach ($enrollments as $enrollment) {
                    $course = $this->db->where('course_id', $enrollment['course_id'])->getOne('courses');
                    $courses[] = $course;
                }
                $retData["courses"] = $courses;
                $retData["status"] = true;
            } else {
                $retData = $this->errorCreator("102", false);
            }
            
            return (object) $retData;
        }

        public function enrollStudentInCourse($studentId, $courseId) {
            $existingEnrollment = $this->db->where('student_id', $studentId)
                                           ->where('course_id', $courseId)
                                           ->getOne('student_courses');
        
            if ($existingEnrollment) {
                $retData = $this->errorCreator("103", false); 
            } else {
                $enrollmentData = array(
                    'student_id' => $studentId,
                    'course_id' => $courseId
                );
        
                $enrollmentId = $this->db->insert('student_courses', $enrollmentData);
        
                if ($enrollmentId) {
                    $retData["status"] = true;
                    $retData["message"] = "Öğrenci kursa başarıyla kaydedildi.";
                } else {
                    $retData = $this->errorCreator("104", false);
                }
            }
        
            return (object) $retData;
        }

        public function removeStudentFromCourse($studentId, $courseId) {
            $existingEnrollment = $this->db->where('student_id', $studentId)
                                           ->where('course_id', $courseId)
                                           ->getOne('student_courses');
        
            if ($existingEnrollment) {
                $result = $this->db->where('student_id', $studentId)
                                  ->where('course_id', $courseId)
                                  ->delete('student_courses');
        
                if ($result) {
                    $retData["status"] = true;
                    $retData["message"] = "Öğrenci kursdan başarıyla çıkarıldı.";
                } else {
                    $retData = $this->errorCreator("105", false);
                }
            } else {
                $retData = $this->errorCreator("106", false);
            }
        
            return (object) $retData;
        }
        
        
    }
?>

