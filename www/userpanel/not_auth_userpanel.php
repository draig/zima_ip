<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" href="../css/cerulean-bootstrap.css">
        <script src="//dashkevich.url.ph/static/js/googleAnalytics.js" type="text/javascript"></script>
        <script src="../js/general.js" type="text/javascript"></script>
        <style>
            .selectors {
                padding-bottom: 30px ;
                padding-top: 30px ;
            }
            .headblock {
                margin-top: 15px ;
            }

        </style>
        <script>

        </script>
    </head>
    <body>
        <div class="container">
            <nav class="navbar navbar-default headblock" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Brand</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="adminpanel.html">
                                Панель управления
                            </a>
                        </li>
                        <li>
                            <a href="upload.html"> 
                                Загрузка файлов
                            </a>
                        </li>
                        <li class="active">
                            <a href="userpanel.html"> 
                                Панель пользователя
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <?php 
                if ( isset( $err ) ) {
            ?>
            <div class="alert alert-warning alert-dismissable">
                <button class="close" aria-hidden="true" data-dismiss="alert" onclick="destroyResAlert(this);" type="button">&times;</button>
                <?php 
                            switch ($err) {
                                case 1:
                                    echo '<strong>Ошибка!</strong> Не заполнена организация' ;
                                    break;
                                case 2:
                                    echo '<strong>Ошибка!</strong> Не заполнен логин' ;
                                    break;
                                case 3:
                                    echo '<strong>Ошибка!</strong> Не заполнен пароль' ;
                                    break;
                                case 4:
                                    echo '<strong>Ошибка!</strong> Не правильное имя пользователя или пароль' ;
                                    break;
                                default:
                                    echo '<strong>Ошибка!</strong> Неизвестная ошибка' ;
                                    break;
                            }
                ?>
            </div>
            <?php
                } 
            ?>
            <form action="../php/userAuthorization.php" method="POST">
            <div class="row selectors">
                <div class="col-sm-10 col-sm-offset-1">
                    <div class="col-sm-6 col-sm-offset-3">
                        <select name="org" class="form-control input-lg" required>
                            <option selected style="display:none;"></option>
                            <?php 
                                require_once '../php/classes.php';
                                $orgs = ORG::orgList() ;
                                foreach ( $orgs as $org ) {
                                    echo '<option value='.$org['org_id'].'>'.$org['identifier'].'</option>' ;
                                } 
                            ?>
                        </select>
                    </div>                    
                </div>
            </div>
            <div class="row selectors">
                <div class="col-sm-10 col-sm-offset-1">
                    <div class="col-sm-5">
                        <input type="text" pattern="\d+" class="form-control" name="login" required>
                    </div>
                    <div class="col-sm-5">
                        <input type="password" pattern="\d+" class="form-control" name="pass" required>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-primary" type="submit" style="width: 100%;" >Войти</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </body>
</html>
