<?php require_once '../php/classes.php'; ?>
<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" media="screen" href="../jquery-ui-1.10.4.custom/css/redmond/jquery-ui-1.9.2.custom.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="../jquery.jqGrid-4.6.0/css/ui.jqgrid.css" />
        <link rel="stylesheet" type="text/css" href="../css/cerulean-bootstrap.css">

        <script src="//dashkevich.url.ph/static/js/googleAnalytics.js" type="text/javascript"></script>
        <script type="text/javascript" charset="UTF-8" src="../js/userpanel.js" ></script>
        <script src="../jquery-ui-1.10.4.custom/js/jquery-1.4.4.min.js" type="text/javascript"></script>
        <script src="../jquery-ui-1.10.4.custom/js/jquery-ui-1.8.6.custom.js" type="text/javascript"></script>
        <script src="../jquery.jqGrid-4.6.0/js/i18n/grid.locale-ru.js" type="text/javascript"></script>
        <script src="../jquery.jqGrid-4.6.0/js/jquery.jqGrid.min.js" type="text/javascript"></script>

        <style>
            .infoblock {
                padding-bottom: 15px ;
                padding-top: 15px ;
            }
            .act_el , li :hover {
                //box-shadow: 0 0 5px;
                cursor: pointer ;
            }
            .headblock {
                margin-top: 15px ;
            }
            .headblock h2{
                margin-top: 10px ;
            }
            .persontable {
                padding-top: 20px ;
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
                            <a href="userpanel.php"> 
                                Панель пользователя
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="row .infoblock">
                <div class="col-sm-10 col-sm-offset-1">
                    <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-6">
                            <div>
                                <h2><span class="label label-primary">ORG:</span>   <?php echo $person->getOrgIdentifier(); ?></h2>
                                <h2><span class="label label-primary">Имя:</span>   <?php echo $person->getName(); ?></h2>
                                <div>
                                </div>                    
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <form method="GET" action="order_form.php">
                                <h2><strong><input type="submit" class="btn btn-success" style="width: 100%;" value="Квитанция"></strong></h2>
                            </form>
                            <form method="GET" action="../php/userExite.php">
                                <h2><strong><input type="submit" class="btn btn-primary" style="width: 100%;" value="Выход"></strong></h2>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-10  col-sm-offset-1">
                            <ul class="nav nav-tabs">
                                <li class="active" id="item" onclick="showItem();"><a>Item</a></li>
                                <li id="meter" onclick="showMeter();"><a>Meter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row" align="center">
                        <div class="col-md-10  col-sm-offset-1 persontable"> 
                            <div id="itemTable" style="width: 610px;">
                                <table class="table table-bordered">
                                    <tbody id="table">
                                        <tr>
                                            <th width="25%">
                                                Service
                                            </th>
                                            <th width="25%">
                                                Norm
                                            </th>
                                            <th width="25%">
                                                Sum
                                            </th>
                                            <th width="25%">
                                                Tarif
                                            </th>
                                        </tr>
                                        <?php
                                        $items = $person->getItems();
                                        foreach ($items as $item) {
                                            echo "
                                            <tr>
                                            <td>
                                            " . $item->getService() . "
                                            </td>
                                            <td>
                                            " . $item->getNorm() . "
                                            </td>
                                            <td>
                                            " . $item->getSum() . "
                                            </td>
                                            <td>
                                            " . $item->getTarif1() . "
                                            </td>
                                            </tr>";
                                        }
                                        ?>

                                    </tbody>
                                </table>

                            </div>
                            <div id="meterTable" style="display:none;width: 610px;" >
                                <table id="matermap">  
                                </table> 
                                <div id="materpanel">
                                </div> 
                                <script src="../js/userMater.js" type="text/javascript">
                                </script>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
