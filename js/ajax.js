var postParam = '';
/*orgs ;
persons ;
items ;
meters ;*/
var person ;

function orgChoose () {
    clearTable () ;
    disablePersonSelector () ;
    var org = document.getElementById( 'org' ).options ;
    xml.open('POST', '../php/personList.php', false );
    postParam = 'org_id=' + org[org.selectedIndex].value ;
    xml.onreadystatechange = printPersonList ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
}

function personChoose () { 
    person = document.getElementById( 'person' ).options ;
    person = person[person.selectedIndex].value ;
    loadIteam() ;
}

function showItemList ( id ) {
    xml.open('POST', '../php/itemList.php', false );
    var postParam = 'p_id=' + id ;
    xml.onreadystatechange = printItemList ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
    var table = document.getElementById( 'table' ) ;
    table.removeAttribute( 'style' ) ;
}
function showMeterList ( id ) {
    xml.open('POST', '../php/meterList.php', false );
    var postParam = 'p_id=' + id ;
    xml.onreadystatechange = printMeterList ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
    var table = document.getElementById( 'table' ) ;
    table.removeAttribute( 'style' ) ;
}

function getOrgList () {
    xml.open('POST', '../php/orgList.php', false );
    xml.onreadystatechange = printOrgList ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);//encodeURIComponent(name) );
}

function printOrgList () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            var orgs = JSON.parse (   xml.responseText  ) ;
            var orgList = document.getElementById( 'org' ) ;
            orgs.forEach( addOrgOption , orgList );
            enableOrgSelector () ;
        }
    }
}

function printPersonList () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            var persons = JSON.parse ( xml.responseText ) ;
            var personList = document.getElementById( 'person' ) ;
            persons.forEach( addPersonsOption , personList );
            if ( persons.length > 0 ) {
                enablePersonSelector () ;
            }
            else {
                alert ( "Org пуст , выберете другой." ) ;
            }
        }
    }
}

function printItemList () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            var items = JSON.parse ( xml.responseText ) ;
            createItemTable ( items ) ;
            //
            //var table = document.getElementById( 'table' ) ;
            //persons.forEach( addPersonsOption , personsList );
        }
    }
}

function printMeterList () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            var items = JSON.parse ( xml.responseText ) ;
            createMeterTable ( items ) ;
            //
            //var table = document.getElementById( 'table' ) ;
            //persons.forEach( addPersonsOption , personsList );
        }
    }
}

function printOrgList () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            var orgs = JSON.parse (   xml.responseText  ) ;
            var orgList = document.getElementById( 'org' ) ;
            orgs.forEach( addOrgOption , orgList );
            enableOrgSelector () ;
        }
    }
}

function acceptItemUpdate () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            if ( xml.responseText >= 0 ) {
                applyItemChanges ( xml.responseText ) ;
            }
            else {
                alert ( 'Ошибка добавления') ;
            }
        }
    }
}

function acceptMeterUpdate () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            if ( xml.responseText >= 0 ) {
                applyMeterChanges ( xml.responseText ) ;
            }
            else {
                alert ( 'Ошибка добавления') ;
            }
        }
    }
}

function acceptItemGet () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            var item = JSON.parse (  xml.responseText ) ;
            cancleItemChanges ( item ) ;
        }
    }
}

function acceptMeterGet () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            var item = JSON.parse (  xml.responseText ) ;
            cancleMeterChanges ( item ) ;
        }
    }
}

function acceptItemDel () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            if ( xml.responseText >= 0 ) {
                remove ( xml.responseText ) ;
            }
            else {
                alert ( 'Ошибка удаления') ;
            }
        }
    }
}

function acceptMeterDel () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            if ( xml.responseText >= 0 ) {
                remove ( xml.responseText ) ;
            }
            else {
                alert ( 'Ошибка удаления') ;
            }
        }
    }
}

function acceptItemInsert () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            if ( xml.responseText >= 0 ) {
                addNewItem ( xml.responseText ) ;
            }
            else {
                alert ( 'Ошибка добавления') ;
            }
        }
    }
}

function acceptMeterInsert () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            if ( xml.responseText >= 0 ) {
                addNewMeter ( xml.responseText ) ;
            }
            else {
                alert ( 'Ошибка добавления') ;
            }
        }
    }
}