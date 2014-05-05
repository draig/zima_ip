<?php
header("Content-Type: application/json; charset=utf-8");
include  'connect_db.php' ;
mysql_query('set names utf8;');
$query = 'INSERT INTO meter ( m_service , m_value_count , m_indicbef1 , m_person ) VALUES ( '.$_POST['m_service'].','.$_POST['m_vc'].','.$_POST['m_ind'].','.$_POST['m_person'].' ) ;' ;
$res = mysql_query($query) ;
if ( $res == false ) {
    echo -1 ;
    die();
}
$query = 'SELECT LAST_INSERT_ID();' ;
$item_id = mysql_query($query) ;
$row = mysql_fetch_array ( $item_id , MYSQLI_ASSOC );
echo $row [ 'LAST_INSERT_ID()' ] ;
