<?php
require_once 'connect_db.php';
class Auth {
    static function isUserAuthentication ( ) {
        session_name( "user_sesion" ) ;
        session_start() ;
        $isAuthoficated = false ;
        if ( !isset ( $_SESSION [ 'auth' ] )) {
            return $isAuthoficated ;
        }
        else {
            if (  $_SESSION [ 'auth' ] === false ) {
                return $isAuthoficated ;
            }
        }
        $login = '' ;
        if ( !isset( $_SESSION ['login']) ) {
            return $isAuthoficated;
        }
        else {
            $login = $_SESSION ['login'] ;
        }
        $pass = '' ;
        if ( !isset( $_SESSION ['pass']) ) {
            return $isAuthoficated;
        }
        else {
            $pass = $_SESSION ['pass'] ;
        }
        $id = -1 ;
        if ( !isset( $_SESSION ['id']) ) {
            return $isAuthoficated;
        }
        else {
            $id = $_SESSION ['id'] ;
        }
        $query = 'SELECT * FROM person WHERE p_id ='.$id.' AND p_login = "'.$login.'" AND password = "'.$pass.'" LIMIT 1;';
        $p_search = mysql_query($query) ;
        if ( !$person = mysql_fetch_array ( $p_search , MYSQLI_ASSOC ) ) {
            return $isAuthoficated;
        }
        else {
            $isAuthoficated = $person ;
        }
        return $isAuthoficated ;
    }
    
    static function userAuthorization ( $org , $login , $pass ) {
        $query = "SELECT p_id FROM person WHERE org =$org AND p_login = \"$login\" AND password = \"$pass\" LIMIT 1;";
        $p_search = mysql_query($query) ;
        if ( !$person = mysql_fetch_array ( $p_search , MYSQLI_ASSOC ) ) {
            return false;
        }
        $p_id = $person [ 'p_id' ] ;
        session_name( "user_sesion" ) ;
        session_start() ;
        $_SESSION [ 'login' ] = $login ;
        $_SESSION [ 'pass' ] = $pass ;
        $_SESSION [ 'auth' ] = true ;
        $_SESSION [ 'id' ] = $p_id ;
        $_SESSION [ 'role' ] = 'USER' ;
        return true ;
    }
    
    static function exite () {
        session_name( "user_sesion" ) ;
        session_start() ;
        if (isset($_COOKIE[session_name()])) {
            setcookie(session_name(), '', time()-86400, '/');
        }
        $_SESSION = array();
        session_destroy();
    }
}