<?php

if ( isset( $_REQUEST ['type']) ) {
    $_type = $_REQUEST ['type'] ;
    switch ( $_type ) {
        case 'edit' :
            if ( isset( $_REQUEST ['rule'] ) ) {
                $_rule = $_REQUEST ['rule'] ;
                switch ( $_rule ) {
                    case 'user' :
                        require 'meter/user/edit.php';
                        break ;
                    case 'admin' :
                        break ;
                    default :
                        break ;
                }
            }
            break ;
        case 'show' :
            if ( isset( $_REQUEST ['rule'] ) ) {
                $_rule = $_REQUEST ['rule'] ;
                switch ( $_rule ) {
                    case 'user' :
                        require 'meter/user/show.php';
                        break ;
                    case 'admin' :
                        break ;
                    default :
                        break ;
                }
            }
            break ;
        case 'add' :
            echo 1 ;
            break ;
        case 'remove' :
            echo 1 ;
            break ;
        default :
            break ;
    }
}