function loadMeter() {
    var item = document.getElementById('item');
    var meter = document.getElementById('meter');
    item.removeAttribute('class');
    meter.setAttribute('class', 'active');
    showMeterList ( person ) ;
}

function loadIteam() {
           
    var item = document.getElementById('item'); 
    var meter = document.getElementById('meter'); 
    meter.removeAttribute('class');
    item.setAttribute('class', 'active');
    showItemList ( person ) ;
}

function clearTable () {
    var table = document.getElementById( 'table' ) ;
    table.innerHTML = '' ;
}
function createItemTable ( items ) {
    clearTable () ;
    var table = document.getElementById( 'table' ) ;
    table.appendChild( createItemTableHeader() ) ;
    var table = document.getElementById( 'table' ) ;
    items.forEach( addItem , table );
    table.appendChild( createItemTableAddRow () ) ;
    table.removeAttribute( 'style' ) ;
}

function createItemTableHeader () {
    var tr = document.createElement('tr');
    var tdServ = document.createElement('th');
    tdServ.setAttribute('width', '20%' );
    tdServ.innerHTML = 'Service' ;
    tr.appendChild(tdServ);
    var tdNorm = document.createElement('th');
    tdNorm.setAttribute('width', '20%');
    tdNorm.innerHTML = 'Norm' ;
    tr.appendChild(tdNorm);
    var tdSum = document.createElement('th');
    tdSum.setAttribute('width', '20%');
    tdSum.innerHTML = 'Sum' ;
    tr.appendChild(tdSum);
    var tdTar = document.createElement('th');
    tdTar.setAttribute('width', '20%');
    tdTar.innerHTML = 'Tarif' ;
    tr.appendChild(tdTar);
    var tdCh = document.createElement('th');
    tdCh.setAttribute('width', '15%');
    tdCh.setAttribute('class', 'change_row');
    tdCh.innerHTML = 'Change' ;
    tr.appendChild(tdCh);
    var tdDel = document.createElement('th');
    tdDel.setAttribute('width', '5%');
    tdDel.setAttribute('class', 'delete_row');
    tdDel.innerHTML = 'Del' ;
    tr.appendChild(tdDel);
    return tr;
}

function createItemTableAddRow () {
    var tr = document.createElement('tr');
    tr.setAttribute( 'id' , 'new' ) ;
    var tdServ = document.createElement('th');
    tdServ.setAttribute('id', 'servnew' );
    tdServ.innerHTML = '<input type="text" id="iservnew" class="form-control" value="">' ;
    tr.appendChild(tdServ);
    var tdNorm = document.createElement('th');
    tdNorm.setAttribute('id', 'normnew');
    tdNorm.innerHTML = '<input type="text" id="inormnew" class="form-control" value="">' ;
    tr.appendChild(tdNorm);
    var tdSum = document.createElement('th');
    tdSum.setAttribute('id', 'sumnew');
    tdSum.innerHTML = '<input type="text" id="isumnew" class="form-control" value="">' ;
    tr.appendChild(tdSum);
    var tdTar = document.createElement('th');
    tdTar.setAttribute('id', 'tarnew');
    tdTar.innerHTML = '<input type="text" id="itarnew" class="form-control" value="">' ;
    tr.appendChild(tdTar);
    tr.appendChild( createItemAddButton () );
    return tr;
}

function createMeterTable ( meters ) {
    clearTable () ;
    var table = document.getElementById( 'table' ) ;
    table.appendChild( createMeterTableHeader() ) ;
    var table = document.getElementById( 'table' ) ;
    meters.forEach( addMeter , table );
    table.appendChild( createMeterTableAddRow () ) ;
    table.removeAttribute( 'style' ) ;
}

function createMeterTableHeader () {
    var tr = document.createElement('tr');
    var tdServ = document.createElement('th');
    tdServ.setAttribute('width', '27%' );
    tdServ.innerHTML = 'Value count' ;
    tr.appendChild(tdServ);
    var tdNorm = document.createElement('th');
    tdNorm.setAttribute('width', '27%');
    tdNorm.innerHTML = 'Indicbef' ;
    tr.appendChild(tdNorm);
    var tdSum = document.createElement('th');
    tdSum.setAttribute('width', '26%');
    tdSum.innerHTML = 'Service' ;
    tr.appendChild(tdSum);
    var tdCh = document.createElement('th');
    tdCh.setAttribute('width', '15%');
    tdCh.setAttribute('class', 'change_row');
    tdCh.innerHTML = 'Change' ;
    tr.appendChild(tdCh);
    var tdDel = document.createElement('th');
    tdDel.setAttribute('width', '5%');
    tdDel.setAttribute('class', 'delete_row');
    tdDel.innerHTML = 'Del' ;
    tr.appendChild(tdDel);
    return tr;
}

function createMeterTableAddRow () {
    var tr = document.createElement('tr');
    tr.setAttribute( 'id' , 'new' ) ;
    var tdServ = document.createElement('th');
    tdServ.setAttribute('id', 'vcnew' );
    tdServ.innerHTML = '<input type="text" id="ivcnew" class="form-control" value="">' ;
    tr.appendChild(tdServ);
    var tdNorm = document.createElement('th');
    tdNorm.setAttribute('id', 'indnew');
    tdNorm.innerHTML = '<input type="text" id="iindnew" class="form-control" value="">' ;
    tr.appendChild(tdNorm);
    var tdSum = document.createElement('th');
    tdSum.setAttribute('id', 'servnew');
    tdSum.innerHTML = '<input type="text" id="iservnew" class="form-control" value="">' ;
    tr.appendChild(tdSum);
    tr.appendChild( createMeterAddButton () );
    return tr;
}

function createMeterTr(id, vcVal, indVal, servVal) {
    var tr = document.createElement('tr');
    tr.setAttribute('id', 'id' + id );
    var tdVc = document.createElement('td');
    tdVc.setAttribute('id', 'vc' + id);
    tdVc.innerHTML = vcVal;
    tr.appendChild(tdVc);
    var tdInd = document.createElement('td');
    tdInd.setAttribute('id', 'ind' + id);
    tdInd.innerHTML = indVal;
    tr.appendChild(tdInd);
    var tdServ = document.createElement('td');
    tdServ.setAttribute('id', 'serv' + id);
    tdServ.innerHTML = servVal;
    tr.appendChild(tdServ);
    tr.appendChild( createChangeTd ( id , 'openMeterEditPanel')); 
    tr.appendChild( createDelTd ( id , 'tryDelMeter' ));
    
    return tr;
    //<tr id="id1">
    //<td id="vc1">
    //1
    //</td>
    //<td id="ind1">
    //0,709
    //</td>
    //<td id="serv1">
    //25
    //</td>
    //<td class="change_row act_el" id="ch1">
    //<span class="glyphicon glyphicon-wrench" onclick="openMeterEditPanel(1);"></span>
    //</td>
    //<td class="delete_row act_el" id="del1">
    //<span class="glyphicon glyphicon-remove" onclick="delItem(1);"></span>
    //</td>
    //</tr>
}

function createItemTr(id, servVal, normVal, sumVal, tarVal) {
    var tr = document.createElement('tr');
    tr.setAttribute('id', 'id' + id );
    var tdServ = document.createElement('td');
    tdServ.setAttribute('id', 'serv' + id);
    tdServ.innerHTML = servVal;
    tr.appendChild(tdServ);
    var tdNorm = document.createElement('td');
    tdNorm.setAttribute('id', 'norm' + id);
    tdNorm.innerHTML = normVal;
    tr.appendChild(tdNorm);
    var tdSum = document.createElement('td');
    tdSum.setAttribute('id', 'sum' + id);
    tdSum.innerHTML = sumVal;
    tr.appendChild(tdSum);
    var tdTar = document.createElement('td');
    tdTar.setAttribute('id', 'tar' + id);
    tdTar.innerHTML = tarVal;
    tr.appendChild(tdTar);
    tr.appendChild( createChangeTd ( id , 'openItemEditPanel')); 
    tr.appendChild( createDelTd ( id , 'tryDelItem' ));
    return tr;
    //<tr class="active" id="id1">
    //<td id="serv1">
    //25
    //</td>
    //<td id="norm1">
    //0,023
    //</td>
    //<td id="sum1">
    //321,45
    //</td>
    //<td id="tar1">
    //1545,45
    //</td>
    //<td class="change_row act_el" id="ch1">
    //<span class="glyphicon glyphicon-wrench" onclick="openItemEditPanel( 1 );"></span>
    //</td>
    //<td class="delete_row act_el" id="del1">
    //<span class="glyphicon glyphicon-remove" onclick="delItem( 1 );"></span>
    //</td>
    //</tr>
}
//change
function tryApplyItemChanges(id) {
    var item = new Object() ;
    item [ 'id' ] = id ;
    item [ 'serv' ] =  document.getElementById('iserv' + id).value;
    item [ 'norm' ] = document.getElementById('inorm' + id).value;
    item [ 'sum' ] = document.getElementById('isum' + id).value;
    item [ 'tar' ] = document.getElementById('itar' + id).value;
    if ( !checkItem (item)) {
        return ;
    }
    updateIteam ( item ) ;
}

function applyItemChanges(id) {
    var serv = document.getElementById('serv' + id);
    serv.innerHTML = document.getElementById('iserv' + id).value;
    var norm = document.getElementById('norm' + id);
    norm.innerHTML = document.getElementById('inorm' + id).value;
    var sum = document.getElementById('sum' + id);
    sum.innerHTML = document.getElementById('isum' + id).value;
    var tar = document.getElementById('tar' + id);
    tar.innerHTML = document.getElementById('itar' + id).value;
    setCangeButton(id , 'openItemEditPanel' );
    var del = document.getElementById('del' + id);
    del.removeAttribute('style');
}
function tryApplyMeterChanges(id) {
    var meter = new Object() ;
    meter [ 'id' ] = id ;
    meter [ 'serv' ] =  document.getElementById('iserv' + id).value;
    meter [ 'vc' ] = document.getElementById('ivc' + id).value;
    meter [ 'ind' ] = document.getElementById('iind' + id).value;
    if ( !checkMeter (meter)) {
        return ;
    }
    updateMeter ( meter ) ;
}

function applyMeterChanges(id) {
    var serv = document.getElementById('serv' + id);
    serv.innerHTML = document.getElementById('iserv' + id).value;
    var vc = document.getElementById('vc' + id);
    vc.innerHTML = document.getElementById('ivc' + id).value;
    var ind = document.getElementById('ind' + id);
    ind.innerHTML = document.getElementById('iind' + id).value;
    setCangeButton(id , 'openMeterEditPanel' );
    var del = document.getElementById('del' + id);
    del.removeAttribute('style');
}
//cancle
function tryCancleItemChanges(id) {
    getIteam ( id ) ;
}

function cancleItemChanges( item ) {
    var id = item [ 'i_id' ] ;
    var serv = document.getElementById('serv' + id);
    serv.innerHTML = item [ 'i_service' ] ;
    var norm = document.getElementById('norm' + id);
    norm.innerHTML = item [ 'i_norm' ] ;
    var sum = document.getElementById('sum' + id);
    sum.innerHTML = item [ 'i_sum' ] ;
    var tar = document.getElementById('tar' + id);
    tar.innerHTML = item [ 'i_tarif1' ] ;
    setCangeButton(id , 'openItemEditPanel' );
    var del = document.getElementById('del' + id);
    del.removeAttribute('style');
}

function tryCancleMeterChanges(id) {
    getMeter ( id ) ;
}

function cancleMeterChanges( item ) {
    var id = item [ 'm_id' ] ;
    var serv = document.getElementById('serv' + id);
    serv.innerHTML = item [ 'm_service' ] ;
    var norm = document.getElementById('vc' + id);
    norm.innerHTML = item [ 'm_value_count' ] ;
    var sum = document.getElementById('ind' + id);
    sum.innerHTML = item [ 'm_indicbef1' ] ;
    setCangeButton(id , 'openMeterEditPanel' );
    var del = document.getElementById('del' + id);
    del.removeAttribute('style');
}


function addNewMeter() {
    var id = 'new';
    var servVal = document.getElementById('iserv' + id).value;
    document.getElementById('iserv' + id).value = '' ;
    var vcVal = document.getElementById('ivc' + id).value;
    document.getElementById('ivc' + id).value = '' ;
    var indVal = document.getElementById('iind' + id).value;
    document.getElementById('iind' + id).value = '' ;
    var table = document.getElementById('table');
    var item_id = Math.floor(Math.random() * (1000 - 3 + 1)) + 3 ;
    table.insertBefore( createMeterTr ( item_id , vcVal , indVal , servVal ) , document.getElementById( id ) ) ;
}
//add
function tryAddNewItem() {
    var item = new Object() ;
    var id = 'new' ;
    item [ 'id' ] = id ;
    item [ 'person' ] = person ;
    item [ 'serv' ] =  document.getElementById('iserv' + id).value;
    item [ 'norm' ] = document.getElementById('inorm' + id).value;
    item [ 'sum' ] = document.getElementById('isum' + id).value;
    item [ 'tar' ] = document.getElementById('itar' + id).value;
    if ( !checkItem (item)) {
        return ;
    }
    insertItem ( item ) ;
}

function addNewItem( item_id ) {
    var id = 'new';
    var servVal = document.getElementById('iserv' + id).value;
    document.getElementById('iserv' + id).value = '' ;
    var normVal = document.getElementById('inorm' + id).value;
    document.getElementById('inorm' + id).value = '' ;
    var sumVal = document.getElementById('isum' + id).value;
    document.getElementById('isum' + id).value = '' ;
    var tarVal = document.getElementById('itar' + id).value;
    document.getElementById('itar' + id).value = '' ;
    var table = document.getElementById('table');
    table.insertBefore( createItemTr ( item_id , servVal , normVal , sumVal , tarVal ) , document.getElementById( id ) ) ;
}

function tryAddNewMeter() {
    var item = new Object() ;
    var id = 'new' ;
    item [ 'id' ] = id ;
    item [ 'person' ] = person ;
    item [ 'serv' ] =  document.getElementById('iserv' + id).value;
    item [ 'vc' ] = document.getElementById('ivc' + id).value;
    item [ 'ind' ] = document.getElementById('iind' + id).value;   
    if ( !checkMeter (item)) {
        return ;
    }
    insertMeter ( item ) ;
}

function addNewMeter( item_id ) {
    var id = 'new';
    var servVal = document.getElementById('iserv' + id).value;
    document.getElementById('iserv' + id).value = '' ;
    var normVal = document.getElementById('ivc' + id).value;
    document.getElementById('ivc' + id).value = '' ;
    var sumVal = document.getElementById('iind' + id).value;
    document.getElementById('iind' + id).value = '' ;
    var tarVal = document.getElementById('iind' + id).value;
    table.insertBefore( createMeterTr ( item_id  , normVal , sumVal , servVal) , document.getElementById( id ) ) ;
}

function addItem( item ) {
    this.appendChild( createItemTr ( item [ 'i_id' ] , item [ 'i_service' ] , item [ 'i_norm' ] , item [ 'i_sum' ] , item [ 'i_tarif1' ] ) );
}

function addMeter( item ) {
    this.appendChild( createMeterTr ( item [ 'm_id' ] , item [ 'm_value_count' ] , item [ 'm_indicbef1' ] , item [ 'm_service' ]  ) );
}
