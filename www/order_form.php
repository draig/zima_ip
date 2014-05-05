<?php
require_once '../php/Auth.php';
require_once '../php/classes.php';
$db_person = false ;
if ( !$db_person = Auth::isUserAuthentication( )) {
    echo '<meta http-equiv="Refresh" content="0;URL= userpanel.php" />' ;
    return ;
}
header("Content-Type: text/html; charset=utf-8");
/*
    

  Модуль оплаты через банк, для физического лица по форме утвержденной СБ РФ (форма ПД-4)

  Совместим с VirtueMart 1.1.x / Joomla 1.5.x

  Автор модуля: программисты ecomsite

  Сайт поддержки http://ecomsite.ru

  Управляющие файлы: ps_pd4.php и ps_pd4.cfg.php

  Распространяется по лицензии GNU/GPL



$name = pd4_name;

$KPP = pd4_KPP;

$INN = pd4_INN;

$OKATO = pd4_OKATO;

$Rch = pd4_Rch;

$Rch_v = pd4_Rch_v;

$BIK = pd4_BIK;

$Kch = pd4_Kch;

$KBK = pd4_KBK;

$Vid_plateza = pd4_platez;*/
?>

<script>

    function Load() {

        text = document.getElementById('result').innerHTML;

        printwin = open('', 'printwin', 'width=600,height=600');

        printwin.document.open();

        printwin.document.writeln('<html><head><title></title></head><body onload=print();close()>');

        printwin.document.writeln(text);

        printwin.document.writeln('</body></html>');

        printwin.document.close();

    }

</script>

<br />

<table id=result>

    <tr><td>

            <p><strong>Квитанция СБ РФ (форма ПД-4)</strong></p>

            <br>

            <table width="570" border="1" cellspacing="0" cellpadding="0">

                <tr>

                    <td width="171" height="218" align="center"><table width="140" height="200" border="0" cellpadding="0" cellspacing="0">

                            <tr>

                                <td height="50" align="center"></td>

                            </tr>

                            <tr>

                                <td height="50" align="right" valign="bottom"><p style="font-size:12px;">ИЗВЕЩЕНИЕ</p></td>

                            </tr>

                            <tr>

                                <td height="100" align="right" valign="bottom"><p style="font-size:12px;">Кассир</p></td>

                            </tr>

                        </table></td>

                    <td width="399" height="218" align="center"><table width="380" border="0" cellspacing="0" cellpadding="0">

                            <tr>

                                <td height="60" valign="top"><p style="font-size:12px;">Получатель платежа: <?php echo '<strong>$name</strong>'; ?>, <?php /*if ($KPP != "")*/ echo 'КПП: <strong>$KPP</strong>,'; ?> <?php /* if ($INN!="") */ echo 'ИНН: <strong>$INN</strong>,'; ?> <?php /*if ($OKATO != "") */echo 'Код ОКАТО: <strong>$OKATO</strong>,'; ?> <?php /*if ($Rch != "") */echo 'р/сч.: <strong>$Rch</strong>,'; ?> <?php /*if ($Rch_v != "")*/ echo 'в: $Rch_v,'; ?> <?php /*if ($BIK != "") */echo 'БИК: $BIK,'; ?> <?php /*if ($Kch != "")*/ echo 'К/сч.: $Kch,'; ?> <?php /*if ($KBK != "")*/ echo 'Код бюджетной классификации (КБК): $KBK'; ?></p></td>

                            </tr>

                            <tr>

                                <td height="50" align="center"><p style="font-size:12px;">Плательщик: <?php /*echo $dbbt->f("last_name");*/ ?> <?php /*echo $dbbt->f("first_name");*/ ?> <?php /*echo $dbbt->f("middle_name"); ?>

                                        <br>

                                        Адрес: <?php /*$strana = $dbbt->f("country");
if ($strana == "RUS") {*/
    echo "Россия";
/*} else {
    echo $dbbt->f("country");
} ?> <?php echo $dbbt->f("city"); ?> <?php echo $dbbt->f("address_1"); ?> <?php echo $dbbt->f("address_2");*/ ?> <?php /*echo $dbbt->f("vm_kvartira");*/ ?></p></td>

                            </tr>

                            <tr>

                                <td height="60" align="center"><table width="380" border="1" cellspacing="0" cellpadding="0">

                                        <tr>

                                            <td height="14" align="center"><p style="font-size:12px;">Вид платежа</p></td>

                                            <td align="center"><p style="font-size:12px;">Дата</p></td>

                                            <td align="center"><p style="font-size:12px;">Сумма</p></td>

                                        </tr>

                                        <tr>

                                            <td height="46" align="center"><p style="font-size:12px;"><?php /*if ($Vid_plateza != "") echo $Vid_plateza; */?><br>Номер заказа: <?/*php printf("%08d", $db->f("order_id")); */?></p></td>

                                            <td align="center"><p style="font-size:12px;"><?/*php echo vmFormatDate($db->f("cdate"), "%d.%m.%y"); */?></p></td>

                                            <td align="center"><p style="font-size:12px;"><?/*php $total = $db->f("order_total");

                                                    echo $CURRENCY_DISPLAY->getFullValue($total, '');
*/?></p></td>

                                        </tr>

                                    </table></td>

                            </tr>

                            <tr>

                                <td height="30" valign="bottom"><p style="font-size:12px;">Плательщик (подпись) __________________</p></td>

                            </tr>

                        </table></td>

                </tr>

                <tr>

                    <td width="171" height="218" align="center"><table width="140" height="200" border="0" cellpadding="0" cellspacing="0">

                            <tr>

                                <td height="50" align="center"></td>

                            </tr>

                            <tr>

                                <td height="50" align="right" valign="bottom"><p style="font-size:12px;">КВИТАНЦИЯ</p></td>
                            </tr>

                            <tr>

                                <td height="100" align="right" valign="bottom"><p style="font-size:12px;">Кассир</p></td>

                            </tr>

                        </table></td>

                    <td width="399" height="218" align="center"><table width="380" border="0" cellspacing="0" cellpadding="0">

                            <tr>

                                <td height="60" valign="top"><p style="font-size:12px;">Получатель платежа: <?php echo '<strong>$name</strong>'; ?>, <?php /*if ($KPP != "")*/ echo 'КПП: <strong>$KPP</strong>,'; ?> <?php /*if ($INN != "")*/ echo 'ИНН: <strong>$INN</strong>,'; ?> <?php /*if ($OKATO != "")*/ echo 'Код ОКАТО: <strong>$OKATO</strong>,'; ?> <?php /*if ($Rch != "")*/ echo 'р/сч.: <strong>$Rch</strong>,'; ?> <?php /*if ($Rch_v != "")*/ echo 'в: $Rch_v,'; ?> <?php /*if ($BIK != "")*/ echo 'БИК: $BIK,'; ?> <?php /*if ($Kch != "")*/ echo 'К/сч.: $Kch,'; ?> <?php /*if ($KBK != "")*/ echo 'Код бюджетной классификации (КБК): $KBK'; ?></p></td>

                            </tr>

                            <tr>

                                <td height="50" align="center"><p style="font-size:12px;">Плательщик: <?php /*echo $dbbt->f("last_name");*/ ?> <?php/* echo $dbbt->f("first_name"); */?> <?php /*echo $dbbt->f("middle_name");*/ ?>

                                        <br>

                                        Адрес: <?php /*$strana = $dbbt->f("country");
                                                    if ($strana == "RUS") {*/
                                                        echo "Россия";
                                                    /*} else {
                                                        echo $dbbt->f("country");
                                                    } ?> <?php echo $dbbt->f("city"); ?> <?php echo $dbbt->f("address_1"); ?> <?php echo $dbbt->f("address_2"); ?> <?php echo $dbbt->f("vm_kvartira"); */?></p></td>

                            </tr>

                            <tr>

                                <td height="60" align="center"><table width="380" border="1" cellspacing="0" cellpadding="0">

                                        <tr>

                                            <td height="14" align="center"><p style="font-size:12px;">Вид платежа</p></td>

                                            <td align="center"><p style="font-size:12px;">Дата</p></td>

                                            <td align="center"><p style="font-size:12px;">Сумма</p></td>

                                        </tr>

                                        <tr>

                                            <td height="46" align="center"><p style="font-size:12px;"><?/*php if ($Vid_plateza != "") echo $Vid_plateza;*/ ?><br>Номер заказа: <?php /*printf("%08d", $db->f("order_id"));*/ ?></p></td>

                                            <td align="center"><p style="font-size:12px;"><?php /*echo vmFormatDate($db->f("cdate"), "%d.%m.%y");*/ ?></p></td>

                                            <td align="center"><p style="font-size:12px;"><?php/* $total = $db->f("order_total");

                                                    echo $CURRENCY_DISPLAY->getFullValue($total, '');
*/?></p></td>

                                        </tr>

                                    </table></td>

                            </tr>

                            <tr>
                                <td height="30" valign="bottom"><p style="font-size:12px;">Плательщик (подпись) __________________</p></td>

                            </tr>

                        </table></td>

                </tr>
                <tr>
                    
                    <td colspan="2" align="center" style="padding: 5px;"> 
                        <?php 
                                    $person = new Person ( $db_person ) ;
                                    $number = $person->getLogin() ;
                                    $number .= date ( 'ymd' ) ;
                                    $number .= '03122' ;
                                    echo "<img src=\"../php/barcode_img.php?number=$number\" height=\"50px\"  width=\"200px\"><br>" ;
                                    echo $number ;
                        ?>
                    </td>
                </tr>

            </table>

        </td></tr>

</table>

<br>

<input type=submit onclick=Load() value="Распечатать квитанцию">

<br>