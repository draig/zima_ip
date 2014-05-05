function activateLogInButton () {
    var logIn = document.getElementById( 'logIn' ) ;
    logIn.setAttribute( 'onclick' , 'logIn();' ) ;
}

function logIn () {
    var org = document.getElementById( 'org' ) ;
    if ( !org.options.selectedIndex )  {
        alert ( 'Вы не выбрали ORG!' ) ;
        return ;
    }
    var login = document.getElementById( 'login' ) ;
    if ( !login.value ) {
        alert ( 'Вы не ввели логин!' ) ;
        login.focus() ;
        return ;
    }
    if ( !checkInt ( login.value )) {
        alert ( 'Логин состоит только из цифр!' ) ;
        markUpError ( login.id ) ;
        return ;
    }
    var pass = document.getElementById( 'pass' ) ;
    if ( !pass.value ) {
        alert ( 'Вы не ввели пароль!' ) ;
        login.focus() ;
        return ;
    }
    if ( !checkInt ( pass.value )) {
        alert ( 'Пароль состоит только из цифр!' ) ;
        markUpError ( pass.id ) ;
        return ;
    }
    autoficationRequest ( login.value , pass.value , org.options [ org.options.selectedIndex ].value ) ;
    
}

function autoficationRequest ( login , pass , org ) {
    xml.open('POST', '../php/userAuth.php', false );
    var postParam = 'login=' + login + '&pass=' + pass + '&org=' + org ;
    xml.onreadystatechange = autoficationRespon ;
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.setRequestHeader("Content-length", postParam.length);
    xml.setRequestHeader("Connection", "close");
    xml.send(postParam);
}

function autoficationRespon () {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            var auth = xml.responseText ;
            alert ( auth ) ;
        }
    }
}