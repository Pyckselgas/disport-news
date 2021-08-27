<?php

$par1_ip = "dsp2s.dt07.net" ;
$par2_name = "disportnews" ;
$par3_password = "4sr9NBnC3H7OtfoL" ;
$par4_db = "disportnews" ;

$induction = mysqli_connect($par1_ip, $par2_name, $par3_password, $par4_db) ;
if ($induction == false){
echo "No connection to database";
}

?>
