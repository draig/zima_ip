<?php
function toCorrectNumber( $str ) {
    $str = preg_replace( '~ ~', '', $str ) ;
    $str = str_replace( ',', '.', $str ) ;
    return $str ;
}

