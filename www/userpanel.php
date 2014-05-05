<?php
require_once '../php/Auth.php';
require_once '../php/classes.php';
if ( isset ( $_GET [ 'err' ] ) ) {
    $err = $_GET [ 'err' ] ;
    require 'userpanel/not_auth_userpanel.php';
    return ;
}
$db_person = false ;
if ( !$db_person = Auth::isUserAuthentication( )) {
    require 'userpanel/not_auth_userpanel.php';
    return ;
}
$person = new Person ( $db_person ) ;
require 'userpanel/auth_userpanel.php';
return ;
