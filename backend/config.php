<?php
header("Access-Control-Allow-Origin: *");  // Tüm kaynaklardan erişime izin verir
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: GET, POST");  // Sadece GET ve POST metodlarına izin verir
$config["dbHost"]           = "localhost";
$config["dbUsername"]       = "root";
$config["dbPassword"]       = "";
$config["dbName"]           = "test";
$config["username"]         = "wrthapir00t!";
$config["password"]         = "JWG+tFFKmIu8r!hL";
$config["error"]["601"]     = "DB bağlantısı sağlanamadı.";
$config["error"]["100"]     = "Kullanıcı bilgileri boş bırakılamaz.";
$config["error"]["101"]     = "Kullanıcı bilgileri geçersiz.";
$config["error"]["102"]     = "Bir veya birden fazla parametre eksik veya hatalı.";
$config["error"]["103"]     = "Öğrenci bu kursa zaten kayıtlı.";
$config["error"]["104"]     = "Kayıt sırasında hata.";
$config["error"]["105"]     = "Silme sırasında hata.";
$config["error"]["106"]     = "Öğrenci bu kursa kayıtlı değil.";
$config["error"]["107"]     = "Süresi bitmiş token.";
?>
