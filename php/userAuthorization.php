<?php
if ( !isset( $_POST [ 'org' ] )) {
    $ERRORS = 1 ;
    echo "<meta http-equiv=\"Refresh\" content=\"0;URL= ../www/userpanel.php?$ERRORS\" />" ;
    //require '../www/userpanel/notauth_userpanel.php';
    return ;  
}
if ( !isset( $_POST [ 'login' ] )) {
    $ERRORS = 2 ;
    echo "<meta http-equiv=\"Refresh\" content=\"0;URL= ../www/userpanel.php?err=$ERRORS\" />" ;
    //require '../www/userpanel/notauth_userpanel.php';
    return ;  
}
if ( !isset( $_POST [ 'pass' ] )) {
    $ERRORS = 3 ;
    echo "<meta http-equiv=\"Refresh\" content=\"0;URL= ../www/userpanel.php?err=$ERRORS\" />" ;
    //require '../www/userpanel/notauth_userpanel.php';
    return ;  
}
require_once '../php/Auth.php';
if ( !Auth::userAuthorization( $_POST [ 'org' ] , $_POST [ 'login' ] , $_POST [ 'pass' ] )) {
    $ERRORS = 4 ;
    echo "<meta http-equiv=\"Refresh\" content=\"0;URL= ../www/userpanel.php?err=$ERRORS\" />" ;
    //require '../www/userpanel/notauth_userpanel.php';
    return ;
}
else {
    echo "<meta http-equiv=\"Refresh\" content=\"0;URL= ../www/userpanel.php\" />" ;
    //require '../www/userpanel/auth_userpanel.php';
    return ;
}
