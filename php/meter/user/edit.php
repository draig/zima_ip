<?php

require_once 'connect_db.php';
require_once 'responce.php';
require_once '../php/Auth.php';
require_once '../php/classes.php';

$db_person = false;
if (!$db_person = Auth::isUserAuthentication()) {
    echo "not rules to edit";
    return;
}
$_person = new Person($db_person);
$id = 0;
$ind = 0;
if (isset($_REQUEST ['m_id'])) {
    $id = $_REQUEST ['m_id'];
    if (!ereg('[0-9]{1,10}', $id)) {
        echo "id";
        return;
    }
    $_meter = Meter::MeterById($id);
    if ($_meter->getPerson() === $_person->getId()) {
        $query = '';
        if (isset($_REQUEST ['ind'])) {
            $ind = $_REQUEST ['ind'];
            if (!ereg('[0-9]{1,12}([.][0-9]{0,12})?', $ind)) {
                echo "ind";
                return;
            }
            if ( $_meter->getInd()!== $ind ) {
                $query = $query." m_user_ind1=$ind";
            }
        }
        
        if ($query !== '') {
            $query = "UPDATE meter SET $query WHERE m_id = $id;";
            mysql_query($query)or die("Couldnt execute query." . mysql_error());;
        }
        
    } else {
        echo "not rules to edit";
        return;
    }
}
