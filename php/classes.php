<?php
require_once 'connect_db.php';

class Item {
    private $id;
    private $service;
    private $norm;
    private $sum;
    private $tarif1;

    public function Item ( $db_item) {
        $this->id = $db_item [ 'i_id' ] ;
        $this->service = $db_item [ 'i_service' ] ;
        $this->norm = $db_item [ 'i_norm' ] ;
        $this->sum = $db_item [ 'i_sum' ] ;
        $this->tarif1 = $db_item [ 'i_tarif1' ] ;
    }
    function setService($service) {
        $this->service = $service;
    }

    function getService() {
        return $this->service ;
    }
    
    function getNorm() {
        return $this->norm ;
    }
    
    function getSum() {
        return $this->sum ;
    }
    
    function getTarif1() {
        return $this->tarif1 ;
    }

}

class Meter {
    private $id;
    private $service;
    private $vc;
    private $ind;
    private $person ;

    public function Meter ( $db_item) {
        $this->id = $db_item [ 'm_id' ] ;
        $this->service = $db_item [ 'm_service' ] ;
        $this->vc = $db_item [ 'm_value_count' ] ;
        $this->ind = $db_item [ 'm_indicbef1' ] ;
        $this->person = $db_item [ 'm_person' ] ;
    }
    
    static function MeterById ( $id ) {
        $query = "SELECT * FROM meter WHERE m_id = $id;" ;
        $meter_search = mysql_query($query);
        $db_meter = mysql_fetch_array($meter_search, MYSQLI_ASSOC) ;
        if ( !$db_meter ) {
            return false ;
        }
        return new Meter ($db_meter) ;
    }
    
    function getService() {
        return $this->service ;
    }
    
    function getVc() {
        return $this->vc ;
    }
    
    function getInd() {
        return $this->ind ;
    }
    
    function getPerson() {
        return $this->person ;
    }

}

class ORG {

    static function orgList() {
        $query = 'SELECT * FROM org';
        $orgs_search = mysql_query($query);
        $orgs = array();
        while ($row = mysql_fetch_array($orgs_search, MYSQLI_ASSOC)) {
            $orgs [] = $row;
        }
        return $orgs ;
    }
    
    static function getOrgById ( $id ) {
        $query = "SELECT * FROM org WHERE org_id = $id;" ;
        $orgs_search = mysql_query($query);
        return mysql_fetch_array($orgs_search, MYSQLI_ASSOC) ;
    }
    
    static function getOrgIdentifierById ( $id ) {
        $query = "SELECT identifier FROM org WHERE org_id = $id;" ;
        $orgs_search = mysql_query($query);
        $org = mysql_fetch_array($orgs_search, MYSQLI_ASSOC) ;
        return $org [ 'identifier' ] ;
    }
    
}

class Person {
    private $name ;
    private $login ;
    private $pass ;
    private $id ;
    private $org ;
    
    public function Person ( $db_person ) {
        $this->id = $db_person [ 'p_id' ] ;
        $this->name = $db_person [ 'p_name' ] ;
        $this->login = $db_person [ 'p_login' ] ;
        $this->pass = $db_person [ 'password' ] ;
        $this->org =  $db_person [ 'org' ] ;
    }
    
    public function getName ( ) {
        return $this->name ;
    }
    
    public function getLogin ( ) {
        return $this->login ;
    }
    
    public function getOrg () {
        return ORG::getOrgById( $this->id ) ;
    }
    
    public function getOrgIdentifier () {
        return ORG::getOrgIdentifierById( $this->id ) ;
    }
    
    public function getItems ( ) {
        $query = "SELECT * FROM item WHERE i_person = ".$this->id.";" ;
        $items_search = mysql_query($query);
        $items = array();
        while ($row = mysql_fetch_array($items_search, MYSQLI_ASSOC)) {
            $items [] = new Item ( $row ) ;
        }
        return $items ;
    }
    
    public function getMeters ( ) {
        $query = "SELECT * FROM meter WHERE m_person = ".$this->id.";" ;
        $meters_search = mysql_query($query);
        $meters = array();
        while ($row = mysql_fetch_array($meters_search, MYSQLI_ASSOC)) {
            $meters [] = new Meter ( $row ) ;
        }
        return $meters ;
    }
    
    public function getId () {
        return $this->id ;
    }
}