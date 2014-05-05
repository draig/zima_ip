<?php
header("Content-Type: application/json; charset=utf-8");
include  'connect_db.php' ;
mysql_query('set names utf8;');
$query = 'UPDATE meter SET m_service='.$_POST['m_service'].' , m_value_count='.$_POST['m_vc'].' , m_indicbef1 ='.$_POST['m_ind'].'  WHERE m_id = '.$_POST['m_id'].' LIMIT 1;' ;
$result = $item_update = mysql_query($query) ;
if ( $result ===false ) {
    echo -1 ;
    die();
}
echo $_POST['m_id'] ;
