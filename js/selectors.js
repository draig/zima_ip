function enablePersonSelector () {
    var person = document.getElementById( 'person' ) ;
    person.removeAttribute( 'disabled' ) ;
}

function disablePersonSelector () {
    var person = document.getElementById( 'person' ) ;
    person.innerHTML= '<option selected style="display:none;"></option>';
    person.setAttribute( 'disabled' , '' );
}

function enableOrgSelector () {
    var person = document.getElementById( 'org' ) ;
    person.removeAttribute( 'disabled' ) ;
}

function addOrgOption ( org ) {
    addOption( this , org[ 'org_id' ] , org[ 'identifier' ] ) ;
}

function addPersonsOption ( person ) {
    addOption( this , person[ 'p_id' ] , person[ 'p_name' ] ) ;
}

function addOption ( select , id , value ) {
    var option = document.createElement( 'option' ) ;
    option.setAttribute( 'value' , id ) ;
    option.innerHTML = value ;
    select.appendChild ( option ) ;
}