function showItem () {
    var item = document.getElementById('item'); 
    var meter = document.getElementById('meter'); 
    meter.removeAttribute('class');
    item.setAttribute('class', 'active');
    var itemTable = document.getElementById('itemTable'); 
    var meterTable = document.getElementById('meterTable'); 
    itemTable.removeAttribute( 'style' ) ;
    meterTable.setAttribute('style', 'display:none;');
}

function showMeter () {
    var item = document.getElementById('item');
    var meter = document.getElementById('meter');
    item.removeAttribute('class');
    meter.setAttribute('class', 'active');
    var itemTable = document.getElementById('itemTable'); 
    var meterTable = document.getElementById('meterTable'); 
    itemTable.setAttribute( 'style' , 'display:none;' ) ;
    meterTable.removeAttribute( 'style' ) ;
}