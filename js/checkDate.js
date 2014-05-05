function checkInt ( int ) {
    return chacker ( int , '^[0-9]+$' ) ;
}

function checkFloat ( float ) {
    return chacker ( float , '^[0-9]+[.]?[$0-9]*$' ) ;
}

function chacker ( value , regStr ) {
    var regEx = new RegExp ( regStr ) ;
    if ( regEx.test ( value ) ) {
        return true ;
    }
    return false ;
}

function checkItemFilds ( item ) {
    var errors = new Array () ;
    if ( ! checkInt ( item [ 'serv' ] ) ) {
        errors.push( 'serv' ) ;
    }
    if ( ! checkFloat ( item [ 'norm' ] ) ) {
        errors.push( 'norm' ) ;
    }
    if ( ! checkFloat ( item [ 'sum' ] ) ) {
        errors.push( 'sum' ) ;
    }
    if ( ! checkFloat ( item [ 'tar' ] ) ) {
        errors.push( 'tar' ) ;
    }
    return errors ;
}

function checkMeterFilds ( item ) {
    var errors = new Array () ;
    if ( !checkInt ( item [ 'serv' ] ) ) {
        errors.push( 'serv' ) ;
    }
    if ( !checkInt ( item [ 'vc' ] ) ) {
        errors.push( 'vc' ) ;
    }
    if ( ! checkFloat ( item [ 'ind' ] ) ) {
        errors.push( 'ind' ) ;
    }
    return errors ;
}

function checkItem ( item ) {
    var errors = checkItemFilds ( item );
    if ( errors.length !== 0 ){
        markUpErrors ( item , errors ) ;
        return false ;
    }
    return true ;
}

function checkMeter ( item ) {
    var errors = checkMeterFilds ( item );
    if ( errors.length !== 0 ){
        markUpErrors ( item , errors ) ;
        return false ;
    }
    return true ;
}

function markUpError ( id ) {
    var errorInput = document.getElementById( id ) ;
    errorInput.setAttribute( 'style' , 'color: red;') ;
    errorInput.setAttribute( 'onfocus' , 'removeWarning(this)' ) ;
}

function markUpErrors ( item , errors) {
    if ( errors.indexOf('serv') !== -1 ){
        var servVal = document.getElementById( 'iserv' + item [ 'id' ] ) ;
        servVal.setAttribute( 'style' , 'color: red;') ;
        servVal.setAttribute( 'onfocus' , 'removeWarning(this)' ) ;
    }
    if ( errors.indexOf('norm') !== -1 ){
        var normVal = document.getElementById('inorm' + item [ 'id' ]);
        normVal.setAttribute( 'style' , 'color: red;') ;
        normVal.setAttribute( 'onfocus' , 'removeWarning(this)' ) ;
    }
    if ( errors.indexOf('sum') !== -1 ){
        var sumVal = document.getElementById('isum' + item [ 'id' ]);
        sumVal.setAttribute( 'style' , 'color: red;') ;
        sumVal.setAttribute( 'onfocus' , 'removeWarning(this)' ) ;
    }
    
    if ( errors.indexOf('tar') !== -1 ){
        var tarVal = document.getElementById('itar' + item [ 'id' ]);
        tarVal.setAttribute( 'style' , 'color: red;') ;
        tarVal.setAttribute( 'onfocus' , 'removeWarning(this)' ) ;
    }
    if ( errors.indexOf('vc') !== -1 ){
        var sumVal = document.getElementById('ivc' + item [ 'id' ]);
        sumVal.setAttribute( 'style' , 'color: red;') ;
        sumVal.setAttribute( 'onfocus' , 'removeWarning(this)' ) ;
    }
    
    if ( errors.indexOf('ind') !== -1 ){
        var tarVal = document.getElementById('iind' + item [ 'id' ]);
        tarVal.setAttribute( 'style' , 'color: red;') ;
        tarVal.setAttribute( 'onfocus' , 'removeWarning(this)' ) ;
    }
}

function removeWarning ( errorField ) {
    errorField.removeAttribute( 'style' );
    errorField.removeAttribute( 'onfocus' );
}