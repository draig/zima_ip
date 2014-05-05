<?php
require_once 'connect_db.php';
$isAuthoficated = false ;
if ( !isset( $_POST [sname]) ) {
    return ;
}
session_name( $_POST [sname] ) ;
session_start() ;
if ( !$auth ) {
    return ;
}
$query = 'SELECT * FROM person WHERE p_id ='.$id.' AND p_login = "'.$login.'" AND password = "+" LIMIT 1;';
$p_search = mysql_query($query) ;
if ( !$person = mysql_fetch_array ( $p_search , MYSQLI_ASSOC ) ) {
    echo -1 ;
    return;
}
