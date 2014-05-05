<?php
header("Content-Type: application/json; charset=utf-8");
$con = mysql_connect( 'localhost:3306' , 'root' , '' ) ;
include  'connect_db.php' ;
mysql_query('set names utf8;');
$query = 'UPDATE item SET i_service='.$_POST['i_service'].' , i_norm='.$_POST['i_norm'].' , i_sum='.$_POST['i_sum'].' , i_tarif1='.$_POST['i_tarif1'].'  WHERE i_id = '.$_POST['i_id'].' LIMIT 1;' ;
$result = $item_update = mysql_query($query) ;
if ( $result ===false ) {
    echo -1 ;
    die();
}
echo $_POST['i_id'] ;
