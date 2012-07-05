<?php

    ob_start();
        
?>

<html>

    <head>

    </head>

    <body>

        <div><b>Name</b>: <?php echo $values['contact-user-name']; ?></div>
		<div><b>E-mail</b>: <?php echo $values['contact-user-email']; ?></div>
        <div><b>Message</b>: <?php echo $values['contact-message']; ?></div>

    </body>

</html>
                
<?php
    
    $contents=ob_get_contents();
    ob_end_clean();
    return($contents);
?>


	