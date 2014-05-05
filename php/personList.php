<?php
header("Content-Type: application/json; charset=utf-8");
include  'connect_db.php' ;
mysql_query('set names utf8;');
$query = 'SELECT * FROM person WHERE org ='.$_POST['org_id'].';';
$persons_search = mysql_query($query) ;
$persons = array () ;
while ( $row = mysql_fetch_array ( $persons_search , MYSQLI_ASSOC ) ) {
    $persons [] = $row ;
}
$json = json_encode( $persons ) ;
echo $json ;

