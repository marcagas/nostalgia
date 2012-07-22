<?php require_once('../plugin/contact-form/config.php'); ?>

<div class="page-contact clear-fix">

    <!-- Header + subtitle -->
    <h1>Contact US</h1>
    <p class="subtitle-paragraph">
        <span class="bold">Just say hello,</span>
        or ask a question.
    </p>
    <p class="subtitle-paragraph">So go on, get in touch.. We work quite hard and luckily we LOVE it!</p>
    <!--/ Header + subtitle -->

    <!-- Personal details + Google map -->
<!--    <h3>Office Details</h3>-->
    <div class="clear-fix contact-details">

        <div class="contact-details-about">
            <p>
                Visual Posters<br />
                1300 662 502<br />
                20A Janette Street, Traralgon, 3844
            </p>
            <ul class="no-list">
                <li class="icon-2 icon-2-1">T: 1300 662 502</li>
                <li class="icon-2 icon-2-3">E: info@visualposters.com.au</li>
            </ul>

        </div>

<!--        <div class="contact-details-map">
            <div class="contact-details-map-arrow"></div>
            <iframe width="245" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=janette+street+traralgon&amp;aq=&amp;sll=-38.204667,146.537029&amp;sspn=0.002331,0.004823&amp;doflg=ptk&amp;ie=UTF8&amp;hq=&amp;hnear=Janette+St,+Traralgon+Victoria+3844,+Australia&amp;t=m&amp;ll=-38.204229,146.537704&amp;spn=0.006745,0.010471&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe><br />
        </div>-->

    </div>
    <p>
        Feel free to contact us from <b>Monday - Friday , 8AM to 9PM weeknights</b>. Meeting exciting people, starting new projects and concepts is what makes us tick. So go on, get in touch.. We work quite hard and luckily we LOVE it!
    </p>

    <h3>DROP A LINE</h3>
    <p>
        One quick favor to make our conversation more productive, let us know what product or service you need help with.
    </p>
    <!-- /Personal details + Google map -->

    <!-- Contact form -->
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