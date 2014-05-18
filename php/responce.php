<?php

class Responce {
    public $page ;
    public $total ;
    public $records ;

    function toJSON () {
        return json_encode ( $this ) ;
    }
}

