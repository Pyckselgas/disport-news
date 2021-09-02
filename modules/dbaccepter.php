<?php
include "database.php";

$newsTable = mysqli_query($induction, "SELECT * FROM `news`");
$offersTable = mysqli_query($induction, "SELECT * FROM `offers`");

$news = mysqli_fetch_assoc($newsTable);
$i = 0;
$a = 0;


while ($offers[$i] = mysqli_fetch_assoc($offersTable)) {
$i++;
}
$json = json_encode($offers);

function aAdditorFunc($offers,&$a,$i){
    $a++;
    if ($a == $i){
        $a = 0;
    }
    return $offers[$a];
}

?>