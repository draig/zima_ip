<?php

require_once 'classes.php' ;
$m1 = Meter::MeterById( 1234 ) ;
echo $m1 ;
$m2 = Meter::MeterById( 1 ) ;
print_r ( $m2 ) ;
