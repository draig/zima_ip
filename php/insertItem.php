<?php
header("Content-Type: application/json; charset=utf-8");
include  'connect_db.php' ;
mysql_query('set names utf8;');
$query = 'INSERT INTO item ( i_service , i_norm , i_sum , i_tarif1 , i_person ) VALUES ( '.$_POST['i_service'].','.$_POST['i_norm'].','.$_POST['i_sum'].','.$_POST['i_tarif1'].','.$_POST['i_person'].' ) ;' ;
$res = mysql_query($query) ;
if ( $res == false ) {
    echo -1 ;
    die();
}
$query = 'SELECT LAST_INSERT_ID();' ;
$item_id = mysql_query($query) ;
$row = mysql_fetch_array ( $item_id , MYSQLI_ASSOC );
echo $row [ 'LAST_INSERT_ID()' ] ;



