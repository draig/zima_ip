var exchange = 0;
var postParam = '';

function uploadFiles(url, files) {
    var formData = new FormData();
    
    for (var i = 0, file; file = files[i]; ++i) {
        formData.append( exchange , file);
        createExcange( file.name , exchange ) ;
        ++ exchange;
    }
    xml.open('POST', url, true);
    xml.onload = filesAdded ;
    xml.send(formData);

}

$(document).ready(function() {
    document.getElementById('file').addEventListener('change', function(e) {
        uploadFiles('../php/insertFromFile.php', this.files);
    }, false);
});

function filesAdded() {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            var respon = JSON.parse(xml.responseText);
            var key ;
            for (key in respon) {
                showResult ( key , respon[key] )  ;
            }
            /*var orgList = document.getElementById('org');
            orgs.forEach(addOrgOption, orgList);
            enableOrgSelector();*/
        }
    }
}

function createExcange(fname, id) {

    var exConteiner = document.createElement('div');
    exConteiner.setAttribute('id', 'execute' + id);
    exConteiner.setAttribute('class', 'row headblock');

    var image = document.createElement('div');
    image.setAttribute('class', 'col-sm-2');
    image.innerHTML = '<img src="../img/xml.png">';
    exConteiner.appendChild(image);
        
    var exBody = document.createElement('div');
    var label = document.createElement('div');
    label.setAttribute('id', 'label' + id);
    label.innerHTML = '<h2>' + fname + '</h2> ';
    exBody.appendChild(label);
    
    var progressBar = document.createElement('div');
    progressBar.setAttribute('class', "progress progress-striped active");
    var progressColumn = document.createElement('div');
    progressColumn.setAttribute('class', "progress-bar");
    progressColumn.setAttribute('role', "progressbar");
    progressColumn.setAttribute('style', "width: 100%");
    progressBar.appendChild(progressColumn);
    exBody.appendChild(progressBar);
    exConteiner.appendChild(exBody);
  
    var exFileConteiner = document.getElementById('exFileConteiner');
    exFileConteiner.appendChild(exConteiner);
}

function showResult(id, result) {
    var conteiner = document.getElementById('execute' + id);
    var label = document.getElementById( 'label' + id);
    if (result == 1) {
        conteiner.innerHTML = '<div class="alert alert-success alert-dismissable">'
                + '<button type="button" class="close" onclick="destroyResAlert(this);" data-dismiss="alert" aria-hidden="true">&times;</button>'
                + 'файл <strong>' + label.innerHTML.replace(/<\/?[^>]+>/g, '') + '</strong> был успешно добавлен в базу данный!'
                + '</div>';
    }
    else {
        conteiner.innerHTML = '<div class="alert alert-warning  alert-dismissable">'
                + '<button type="button" class="close" onclick="destroyResAlert(this);" data-dismiss="alert" aria-hidden="true">&times;</button>'
                + 'Не удалось добавить файл <strong>' + label.innerHTML.replace(/<\/?[^>]+>/g, '') + '</strong> в базу данный!'
                + '</div>';
    }
    //setTimeout('delAsseptMsg()', 2500);
}
