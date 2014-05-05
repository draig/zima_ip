<?php
header("Content-Type: application/json; charset=utf-8");
include  'connect_db.php' ;
mysql_query('set names utf8;');
$query = 'DELETE FROM item WHERE i_id = '.$_POST['i_id'].' LIMIT 1;' ;
$result = mysql_query($query) ;
if ( $result == false ){
    echo -1 ;
    die();
}
echo $_POST['i_id'] ;