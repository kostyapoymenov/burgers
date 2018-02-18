<?php

        header("Content-type: text/html; charset=UTF-8");

        $name = $_POST['form-name'];
        $telephone = $_POST['for-telephone'];
        $street = $_POST['form-street'];
        $home = $_POST['form-home'];
        $housing = $_POST['form-housing'];
        $flat = $_POST['form-flat'];
        $floor = $_POST['form-floor'];
        $comment = $_POST['form-comment'];
        $pay = $_POST['form-pay'];
        $call_me = $_POST['form-call'];

        $mail_message = '
            <html>
            <head>
                <title>Заявка</title>
            </head>
            <body>
                <h2>Заказ:</h2>
                <ul>
                <li>Имя:' . $name . '</li>
                <li>Телефон: ' . $telephone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $home . '</li>
                <li>Корпус: ' . $housing . '</li>
                <li>Квартира: ' . $flat . '</li>
                <li>Этаж: ' . $floor . '</li>
                <li>Сообщение: ' . $comment . '</li>
                <li>Сдача: ' . $pay . '</li>
                <li>Перезванивать: ' . $call_me . '</li>
                </ul>
            </body>
            </html>';

        $mail = mail('koval@loftschool.com', 'Заказ', $mail_message);

        if($mail) {
            echo 'Ваша заявка принята. В ближайшее время мы с вами свяжемся.';
        }
        else {
            echo 'Произошло недоразумение. Мы скоро все исправим.';
        }

?>