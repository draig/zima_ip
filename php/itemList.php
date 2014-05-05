<?php
header("Content-Type: application/json; charset=utf-8");
include  'connect_db.php' ;
mysql_query('set names utf8;');
$query = 'SELECT * FROM item WHERE i_person ='.$_POST['p_id'].';';
$items_search = mysql_query($query) ;
$items = array () ;
while ( $row = mysql_fetch_array ( $items_search , MYSQLI_ASSOC ) ) {
    $items [] = $row ;
}
$json = json_encode( $items ) ;
echo $json ;