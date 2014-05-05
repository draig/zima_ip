<?php
include 'connect_db.php';
include 'deleteChar.php';
set_time_limit(0);
$errors = array();
$work_result = array();
foreach ( $_FILES as $key => $file ){
    try {
        @mysql_query('set names utf8;');
        //$xmlstr = file_get_contents( $_FILES ['cs']  ['tmp_name'] );
        $xmlstr = @file_get_contents( $file  ['tmp_name'] );
        $xml = @new SimpleXMLElement($xmlstr);
        $person_id;
        $org_id;
        foreach ($xml->ORG as $orgNode) {
            try {
                $identifier = $orgNode ['identifier'];
                $query = 'SELECT org_id FROM org WHERE identifier = ' . $identifier . ' ;';
                $org_select = @mysql_query($query);
                if (!$org = @mysql_fetch_array($org_select, MYSQLI_ASSOC)) {
                    $query = 'INSERT INTO org (identifier) VALUES (' . $identifier . ') ;';
                    $org_create = @mysql_query($query);
                    $query = 'SELECT LAST_INSERT_ID();';
                    $last_insert = @mysql_query($query);
                    $org_id = ( @mysql_fetch_array($last_insert, MYSQLI_ASSOC) );
                    $org_id = $org_id ['LAST_INSERT_ID()'] ;
                    //echo $identifier.'<br>' ;
                    //echo $org_id.'<br>' ;
                } else {
                    $org_id = $org['org_id'];
                    //echo $identifier.'<br>' ;
                    //echo $org_id.'<br>' ;
                }
                foreach ($orgNode->PersAcc as $personNode) {
                    try {
                        $login = $personNode ['login'];
                        $name = $personNode ['name'];
                        $password = $personNode ['password'];
                        $query = 'SELECT p_id FROM person WHERE org = ' . $org_id . ' AND p_login = "' . $login . '" AND password = "' . $password . '";';
                        ;
                        $person_select = @mysql_query($query);
                        if (!$person = @mysql_fetch_array($person_select, MYSQLI_ASSOC)) {
                            $query = 'INSERT INTO person ( p_name , p_login , password , org ) VALUE ( "' . $name . '","' . $login . '","' . $password . '",' . $org_id . ');';
                            $result = @mysql_query($query);
                            $query = 'SELECT LAST_INSERT_ID();';
                            $last_insert = @mysql_query($query);
                            $person_id = ( @mysql_fetch_array($last_insert, MYSQLI_ASSOC) );
                            $person_id = $person_id ['LAST_INSERT_ID()'] ;
                            //echo $name.'нeту'.'<br>' ;
                            //echo $person_id.'<br>' ;
                        } else {
                            $person_id = $person['p_id'];
                            $query = 'DELETE FROM  meter WHERE m_person = ' . $person_id . ';';
                            $result = @mysql_query($query);
                            $query = 'DELETE FROM  item  WHERE i_person = ' . $person_id . ';';
                            $result = @mysql_query($query);
                            //echo $name.' eсть'.'<br>' ;
                            //echo $person_id.'<br>' ;
                        }
                        foreach ($personNode->item as $itemNode) {
                            try {
                                $service = $itemNode ['service'];
                                $service = toCorrectNumber($service);
                                $norm = $itemNode ['norm'];
                                $norm = toCorrectNumber($norm);
                                $sum = $itemNode ['sum'];
                                $sum = toCorrectNumber($sum);
                                $tarif1 = $itemNode ['tarif1'];
                                $tarif1 = toCorrectNumber($tarif1);
                                $query = 'INSERT INTO item ( i_service , i_norm , i_sum , i_tarif1 , i_person ) VALUE ( ' . $service . ',' . $norm . ',' . $sum . ',' . $tarif1 . ',' . $person_id . ');';
                                //echo $query.'<br>' ;
                                @mysql_query($query);
                            } catch (Exception $e) {
                                $errors[] = $key;
                            }
                        }
                        foreach ($personNode->meter as $meterNode) {
                            try {
                                $vc = $meterNode ['value_count'];
                                $vc = toCorrectNumber($vc);
                                $ind = $meterNode ['indicbef1'];
                                $ind = toCorrectNumber($ind);
                                $service = $meterNode ['service'];
                                $service = toCorrectNumber($service);
                                $query = 'INSERT INTO meter ( m_value_count , m_indicbef1 , m_service , m_person ) VALUE ( ' . $vc . ',' . $ind . ',' . $service . ',' . $person_id . ');';
                                //echo $query.'<br>' ;
                                @mysql_query($query);
                            } catch (Exception $e) {
                                $errors[] = $key;
                            }
                        }
                    } catch (Exception $e) {
                        $errors[] = $key;
                    }
                }
            } catch (Exception $e) {
                $errors[] = $key;
            }
        }
    } catch (Exception $e) {
        $errors[] = $key; 
    }
    if ( in_array( $key , $errors ) ) {
        $work_result[$key] = '0' ;
    }
    else {
        $work_result[$key] = '1' ;
    }
    $errors = array() ;
}
$json = json_encode( $work_result ) ;
echo $json ;