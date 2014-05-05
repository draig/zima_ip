function openItemEditPanel(id) {
    openEditPanel ( id , 'tryApplyItemChanges' , 'tryCancleItemChanges' );
    var serv = document.getElementById('serv' + id);
    serv.innerHTML = '<input type="text" id="iserv' + id + '" class="form-control" value="' + serv.innerHTML.trim() + '">';
    var norm = document.getElementById('norm' + id);
    norm.innerHTML = '<input type="text" id="inorm' + id + '" class="form-control" value="' + norm.innerHTML.trim() + '">';
    var sum = document.getElementById('sum' + id);
    sum.innerHTML = '<input type="text" id="isum' + id + '" class="form-control" value="' + sum.innerHTML.trim() + '">';
    var tar = document.getElementById('tar' + id);
    tar.innerHTML = '<input type="text" id="itar' + id + '" class="form-control" value="' + tar.innerHTML.trim() + '">';
}

function openMeterEditPanel ( id ) {
    openEditPanel ( id , 'tryApplyMeterChanges' , 'tryCancleMeterChanges' );
    var vc = document.getElementById('vc' + id);
    vc.innerHTML = '<input type="text" id="ivc' + id + '" class="form-control" value="' + vc.innerHTML.trim() + '">';
    var ind = document.getElementById('ind' + id);
    ind.innerHTML = '<input type="text" id="iind' + id + '" class="form-control" value="' + ind.innerHTML.trim() + '">';
    var serv = document.getElementById('serv' + id);
    serv.innerHTML = '<input type="text" id="iserv' + id + '" class="form-control" value="' + serv.innerHTML.trim() + '">';
}
function openEditPanel ( id , applyFunc , cancleFunc ) {
    var ch = document.getElementById('ch' + id);
    ch.innerHTML = '';
    var apply = '<span class="glyphicon glyphicon-ok change_ok" onclick="' + applyFunc + '(' + id + ');"></span>'; ;
    var cancle = '<span class="glyphicon glyphicon-arrow-right change_stop" onclick="' + cancleFunc + '(' + id + ');"></span>' ;
    ch.appendChild(addApplyAndCancleTablet( apply , cancle ));
    ch.setAttribute('style', 'font-size: x-large;');
    var del = document.getElementById('del' + id);
    del.setAttribute('style', 'font-size: x-large;');
}

function  addApplyAndCancleTablet( apply , cancle ) {
    var e_tbl = document.createElement('table');
    e_tbl.setAttribute('class', 'change_tbl');
    e_tbl.setAttribute('rules', 'cols');
    var e_tr = document.createElement('tr');
    var e_td1 = document.createElement('td');
    e_td1.innerHTML = apply ;
    e_tr.appendChild(e_td1);
    var e_td2 = document.createElement('td');
    e_td2.innerHTML = cancle ;
    e_tr.appendChild(e_td2);
    e_tbl.appendChild(e_tr);
    return e_tbl;
    //<table class="change_tbl" rules="cols" >
    //<tr>
    //<td>
    //<span class="glyphicon glyphicon-ok change_ok" onclick=""></span>
    //</td>
    //<td>
    //<span class="glyphicon glyphicon-arrow-right change_stop" onclick=""></span>
    //</td>
    //</tr>
    //</table>   
}

function createChangeTd ( id , openEPFunc ) {
    var tdCh = document.createElement('td');
    tdCh.setAttribute('id', 'ch' + id);
    tdCh.setAttribute('class', 'change_row act_el');
    tdCh.innerHTML = '<span class="glyphicon glyphicon-wrench" onclick="' + openEPFunc + '( ' + id + ' );"></span>';
    return tdCh ;
}

function createDelTd ( id , delFunc ) {
    var tdDel = document.createElement('td');
    tdDel.setAttribute('id', 'del' + id);
    tdDel.setAttribute('class', 'delete_row act_el');
    tdDel.innerHTML = '<span class="glyphicon glyphicon-remove" onclick="' + delFunc + '( ' + id + ' );"></span>';
    return tdDel ;
}

function createItemAddButton () {
    return createAddButton ( 'tryAddNewItem()' ) ;
}

function createMeterAddButton () {
    return createAddButton ( 'tryAddNewMeter()' ) ;
}

function createAddButton ( addFunc ) {
    var tdCh = document.createElement('th');
    tdCh.setAttribute('colspan', '2');
    tdCh.setAttribute('class', 'change_row');
    tdCh.innerHTML = '<button type="button" class="btn btn-primary" style="width: 100%;" onclick="' + addFunc + ';">Add</button>' ;
    return tdCh;  
}

function  setCangeButton( id , openEPFunc ) {
    var ch = document.getElementById('ch' + id);
    ch.removeAttribute('style');
    ch.innerHTML = '<span class="glyphicon glyphicon-wrench" onclick="' + openEPFunc + '( ' + id + ' );"></span>';
}

function tryDelItem(id) {
    delIteam ( id ) ;
}
function tryDelMeter(id) {
    delMeter ( id ) ;
}
function remove ( id ) {
    var tr = document.getElementById('id' + id);
    tr.parentNode.removeChild(tr);
}
