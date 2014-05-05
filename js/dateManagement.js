function updateIteam ( item ) {
    xml.open('POST', '../php/updateItem.php', false );
    var postParam = 'i_id=' + item [ 'id' ] ;
    postParam = postParam + '&i_service=' + item [ 'serv' ] ;
    postParam = postParam + '&i_norm=' + item [ 'norm' ] ;
    postParam = postParam + '&i_sum=' + item [ 'sum' ] ;
    postParam = postParam + '&i_tarif1=' + item [ 'tar' ] ;
    xml.onreadystatechange = acceptItemUpdate ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
}

function updateMeter ( item ) {
    xml.open('POST', '../php/updateMeter.php', false );
    var postParam = 'm_id=' + item [ 'id' ] ;
    postParam = postParam + '&m_service=' + item [ 'serv' ] ;
    postParam = postParam + '&m_vc=' + item [ 'vc' ] ;
    postParam = postParam + '&m_ind=' + item [ 'ind' ] ;
    xml.onreadystatechange = acceptMeterUpdate ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
}

function getIteam ( id ) {
    xml.open('POST', '../php/getItem.php', false );
    var postParam = 'i_id=' + id ;
    xml.onreadystatechange = acceptItemGet ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
}

function getMeter ( id ) {
    xml.open('POST', '../php/getMeter.php', false );
    var postParam = 'm_id=' + id ;
    xml.onreadystatechange = acceptMeterGet ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
}

function delIteam ( id ) {
    xml.open('POST', '../php/delItem.php', false );
    var postParam = 'i_id=' + id ;
    xml.onreadystatechange = acceptItemDel ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
}

function delMeter ( id ) {
    xml.open('POST', '../php/delMeter.php', false );
    var postParam = 'm_id=' + id ;
    xml.onreadystatechange = acceptMeterDel ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
}

function insertItem ( item ) {
    xml.open('POST', '../php/insertItem.php', false );
    var postParam = 'i_person=' + item [ 'person' ] ;
    postParam = postParam + '&i_service=' + item [ 'serv' ] ;
    postParam = postParam + '&i_norm=' + item [ 'norm' ] ;
    postParam = postParam + '&i_sum=' + item [ 'sum' ] ;
    postParam = postParam + '&i_tarif1=' + item [ 'tar' ] ;
    xml.onreadystatechange = acceptItemInsert ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
}

function insertMeter ( item ) {
    xml.open('POST', '../php/insertMeter.php', false );
    var postParam = 'm_person=' + item [ 'person' ] ;
    postParam = postParam + '&m_service=' + item [ 'serv' ] ;
    postParam = postParam + '&m_vc=' + item [ 'vc' ] ;
    postParam = postParam + '&m_ind=' + item [ 'ind' ] ;
    xml.onreadystatechange = acceptMeterInsert ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
}