jQuery("#matermap").jqGrid({
    url: '../php/meter.php?type=show&rule=user',
    datatype: "json",
    colNames: ['ID', 'Value count', 'Indicbef', 'Service' ],
    colModel: [
        {name: 'm_id', index: 'm_id', jsonmap:"m_id", width: 150,align: "center",editable:true,editoptions: {disabled: true, size:5} },
        {name: 'vc', index: 'vc', width: 150, sortable:false, jsonmap: "m_value_count",align: "center", editable:false},
        {name: 'ind', index: 'ind', width: 150 , sortable:false, jsonmap: "m_indicbef1",align: "center",editable:true},
        {name: 'Service', index: 'service', sortable:false, jsonmap: "m_service", width: 150, align: "center",editable:false}
    ],
    rowNum: 10,
    rowList: [10, 20, 30],
    pager: '#materpanel',
    sortname: 'm_id',
    viewrecords: true,
    //sortorder: "desc",
    jsonReader: {
        repeatitems: false,
        id: "0"
    },
    editurl: '../php/meter.php?type=edit&rule=user',
    caption: "Meter",
    height: '100%'
});
jQuery("#matermap").jqGrid('navGrid', '#materpanel', {edit: true, add: false, del: false});
              