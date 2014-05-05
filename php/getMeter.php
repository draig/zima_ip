<?php
header("Content-Type: application/json; charset=utf-8");
include  'connect_db.php' ;
mysql_query('set names utf8;');
$query = 'SELECT * FROM meter WHERE m_id = '.$_POST['m_id'].' LIMIT 1;' ;
$item_select = mysql_query($query) ;
$item = mysql_fetch_array ( $item_select , MYSQLI_ASSOC ) ;
$json = json_encode( $item ) ;
echo $json ;
