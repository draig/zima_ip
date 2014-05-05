<?php
include 'db_property.php' ;
$con = mysql_connect( $db_host , $db_login , $db_password ) ;
if (!$con ){
    echo -1 ;
    die();
}
if ( !mysql_select_db( $db , $con ) ) {
    echo -1 ;
    die();
}
mysql_query('set names utf8;');