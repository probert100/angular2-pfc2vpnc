<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$decrypt = $_POST['decrypt'];

if(is_null($decrypt)){
  $filename = $_FILES['file']['name'];
  $tmpPath = $_FILES['file']['tmp_name'];
  $output = shell_exec('/usr/local/bin/pcf2vpnc '.$tmpPath);

  error_log("Filename".$filename." path ".$tmpPath, 0);
  error_log(" Output: ".$output);
  echo ($output);

} else{
  $output = shell_exec('/bin/cisco-decrypt '.$decrypt);
  echo ($output);

}


?>
