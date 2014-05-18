<?php
require_once 'connect_db.php' ;
require_once 'responce.php' ;
require_once '../php/Auth.php';
require_once '../php/classes.php';

$db_person = false;
if (!$db_person = Auth::isUserAuthentication()) {
    echo "not rules to show";
    return;
}
$_person = new Person($db_person);

$limit = $_REQUEST['rows'] ;
$page = $_REQUEST['page'] ;
$sidx = $_REQUEST['sidx'] ;
$sord = $_REQUEST['sord'] ;
$result = mysql_query("SELECT COUNT(*) AS count FROM meter WHERE m_person=".$_person->getId().";" );
$row = mysql_fetch_array($result, MYSQL_ASSOC);
$count = $row['count'];
if ($count > 0) {
    $total_pages = ceil($count / $limit);
} else {
    $total_pages = 0;
} if ($page > $total_pages)
    $page = $total_pages; 
$start = $limit * $page - $limit; // do not put $limit*($page - 1) 
if ($start < 0)
    $start = 0; 
$SQL = " SELECT m_id , m_value_count , IF( m_user_ind1 IS null , m_indicbef1 , m_user_ind1 ) AS m_indicbef1 , m_service"
        . " FROM meter WHERE m_person=".$_person->getId().
        " AND m_indicbef1 IS NOT null  ORDER BY $sidx $sord LIMIT $start , $limit"; // ORDER BY $sidx $sord LIMIT $start , $limit
$result = mysql_query($SQL) or die("Couldnt execute query." . mysql_error());
$responce = new Responce () ;
$responce->page = $page;
$responce->total = $total_pages;
$responce->records = $count;
$i = 0;
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $responce->rows[$i] = $row;
    $i++;
} 
echo $responce->toJSON() ;
