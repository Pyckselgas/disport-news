<?php
include "database.php"

$newsTable = mysqli_query($induction, "SELECT * FROM 'news'");
$offersTable = mysqli_query($induction, "SELECT * FROM 'offers'");

$news = mysqli_fetch_assoc($newsTable);
$i = 0
while ($offers[i] = mysqli_fetch_assoc($offeersTable)) {
    $i++
}

?>