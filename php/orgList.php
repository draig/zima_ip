<?php
require_once 'classes.php' ;
$json = json_encode( ORG::orgList() ) ;
echo $json ;