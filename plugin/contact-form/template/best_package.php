<?php

    ob_start();

?>

<html>

    <head>

    </head>

    <body>
        <div><h1>Best Package Contact Form</h1></div>
        <div><b>Work For: </b><?php echo $values['company_name']; ?></div>
        <div><b>Phone Number</b>: <?php echo $values['phone_number']; ?></div>
    </body>

</html>

<?php

    $contents=ob_get_contents();
    ob_end_clean();
    return($contents);
?>


