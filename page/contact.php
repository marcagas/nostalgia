<?php require_once('../plugin/contact-form/config.php'); ?>

<div class="page-contact clear-fix">

    <!-- Header + subtitle -->
    <h1>Contact</h1>
    <p class="subtitle-paragraph">
		If you just want to say hello or ask a question,
        <span class="bold">please send me a short message.</span>
    </p>
    <!--/ Header + subtitle -->

    <!-- Personal details + Google map -->
    <h3>This is what our door looks like.</h3>
    <div class="clear-fix contact-details">

        <div class="contact-details-about">
            <p>
                Visual Posters<br />
                1300 662 502
            </p>
            <ul class="no-list">
                <li class="icon-2 icon-2-1">T: 1300 662 502</li>
                <li class="icon-2 icon-2-3">E: info@visualposters.com.au</li>
            </ul>

        </div>

        <div class="contact-details-map">
            <div class="contact-details-map-arrow"></div>
            <iframe width="245" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.ph/?ie=UTF8&amp;ll=-38.205038,146.537683&amp;spn=0.006989,0.009817&amp;t=h&amp;z=17&amp;output=embed"></iframe>
        </div>

    </div>
    <p class="subtitle-paragraph">
        Feel free to contact us from Monday - Friday , 8AM to 9PM weeknights. Meeting exciting people, starting new projects and concepts is what makes us tick. So go on, get in touch.. We work quite hard and luckily we LOVE it!
    </p>
    <p class="subtitle-paragraph">
        One quick favor to make our conversation more productive, let us know what product or service you need help with.
    </p>
    <!-- /Personal details + Google map -->

    <!-- Contact form -->
    <h3>General Inquiry</h3>
    <form name="contact" id="contact" action="" method="post" class="clear-fix">

        <div class="clear-fix">

            <div class="clear-fix form-line">
                <div class="float-left block"><input type="text" name="contact-user-name" id="contact-user-name" value="<?php echo _def_data_name; ?>" onfocus="clearInput(this,'focus','<?php echo _def_data_name; ?>')" onblur="clearInput(this,'blur','<?php echo _def_data_name; ?>')"/></div>
                <div class="float-right block"><input type="text" name="contact-user-email" id="contact-user-email" value="<?php echo _def_data_email; ?>" onfocus="clearInput(this,'focus','<?php echo _def_data_email; ?>')" onblur="clearInput(this,'blur','<?php echo _def_data_email; ?>')"/></div>
            </div>
            <div class="clear-fix form-line">
                <div class="float-left block">
                    <textarea rows="0" cols="0" name="contact-message" id="contact-message" onfocus="clearInput(this,'focus','<?php echo _def_data_message; ?>')" onblur="clearInput(this,'blur','<?php echo _def_data_message; ?>')"><?php echo _def_data_message; ?></textarea>
                </div>
            </div>
            <div class="clear-fix form-line">
                <a href="javascript:submitContactForm();" class="button block" id="contact-send">Send</a>
            </div>

        </div>

    </form>
    <!-- /Contact form -->

</div>