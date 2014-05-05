<?php
include  'connect_db.php' ;
$query = 'SELECT p_id FROM person WHERE org ='.$_POST['org'].' AND p_login = "'.$_POST['login'].'" AND password = "'.$_POST['pass'].'" LIMIT 1;';
$p_search = mysql_query($query) ;
if ( !$person = mysql_fetch_array ( $p_search , MYSQLI_ASSOC ) ) {
    echo -1 ;
    return;
}
$p_id = $person [ 'p_id' ] ;
session_name( "u$p_id" ) ;
session_start() ;
session_register( 'login' , 'password' , 'auth' , 'id' , 'role' ) ;
$login = $_POST['login'] ;
$password = $_POST['pass'] ;
$auth = true ;
$id = $p_id ;
$role = 'USER' ;
echo $p_id ;
return ;