<?php

    ob_start();

?>

<html>

    <head>

    </head>

    <body>

        <div><b>Name</b>: <?php echo $values['first_name'].' '.$values['last_name']; ?></div>
        <div><b>Work For: </b><?php echo $values['company_name'] ?></div>
        <div><b>Phone Number</b>: <?php echo $values['phone_number']; ?></div>
        <div><b>E-mail</b>: <?php echo $values['email']; ?></div>
        <div><b>Worst Fear</b>: <?php echo $values['worst_fear']; ?></div>

    </body>

</html>

<?php

    $contents=ob_get_contents();
    ob_end_clean();
    return($contents);
?>


