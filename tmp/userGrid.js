jQuery("#jsonmap").jqGrid({
    url: 'meter.php',
    datatype: "json",
    colNames: ['Inv No', 'Date', 'Client', 'Amount', 'Tax', 'Total', 'Notes'],
    colModel: [
        {name: 'id', index: 'id', width: 55,editable:false},
        {name: 'date', index: 'date', width: 90, jsonmap: "order_date",editable:true,editoptions: {disabled: true}},
        {name: 'name', index: 'client', width: 100 , jsonmap: "client",editable:true,editoptions: {disabled: true}},
        {name: 'amount', index: 'amount', width: 80, align: "right",editable:true},
        {name: 'tax', index: 'tax', width: 80, align: "right",editable:true,editoptions: {disabled: true}},
        {name: 'total', index: 'total', width: 80, align: "right",editable:true,editoptions: {disabled: true}},
        {name: 'note', index: 'note', width: 150, sortable:false,editable:false}
    ],
    rowNum: 10,
    rowList: [10, 20, 30],
    pager: '#pjmap',
    sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    jsonReader: {
        repeatitems: false,
        id: "0"
    },
    editurl: "meter_edit.php?edit_type=amount",
    caption: "JSON Mapping",
    height: '100%'
});
jQuery("#jsonmap").jqGrid('navGrid', '#pjmap', {edit: true, add: false, del: false});
//jQuery("#jsonmap").jqGrid('inlineNav',"#pjmap");
              