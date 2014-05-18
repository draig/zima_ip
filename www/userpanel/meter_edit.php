<?php
include 'connect_db.php' ;
include 'responce.php' ;
require_once '../php/Auth.php';
require_once '../php/classes.php';

$db_person = false ;
if ( !$db_person = Auth::isUserAuthentication( )) {
    echo "not rules to edit" ;
    return ;
}
$_person = new Person ( $db_person ) ;
$id = 0 ; $ind = 0 ;
if ( isset( $_REQUEST ['oper']) ) {
    if ( $_REQUEST ['oper'] == 'edit' ){
        if ( isset( $_REQUEST ['edit_type'] ) ) {
            if ( $_REQUEST ['edit_type'] == 'amount' ){
                if ( isset( $_REQUEST ['m_id'] ) && isset( $_REQUEST ['ind'] )) {
                    $id = $_REQUEST ['m_id'] ;
                    if ( !ereg( '[0-9]{1,10}' , $id) ) {
                        echo "id" ;
                        return ;
                    }
                    $ind = $_REQUEST ['ind'] ;
                    if ( !ereg( '[0-9]{1,12}([.][0-9]{0,12})?' , $ind) ) {
                        echo "ind" ;
                        return ;
                    }
                    $_meter = Meter::MeterById($id);
                    if ( $_meter->getPerson() === $_person->getId() ){
                        $query = "UPDATE meter SET m_indicbef1=$ind WHERE m_id = $id;" ;
                        mysql_query( $query ) ;
                    }
                    else {
                        echo "not rules to edit" ;
                        return ;
                    }
                }
            }
        }
    }
}
