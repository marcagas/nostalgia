<?php require_once('../plugin/contact-form/config.php'); ?>

<div class="page-contact clear-fix">

    <!-- Header + subtitle -->
    <h1>Contact US</h1>
<!--    <p class="subtitle-paragraph">So go on, get in touch.. We work quite hard and luckily we LOVE it!</p>-->
    <p class="subtitle-paragraph"><span class="bold">Responsible Adults with phones and voicemail </span></p>
    <p class="subtitle-paragraph">Contacts are a safe and socially acceptable alternative to glasses. Speaking of which, here are some people you might want to talk to.</p>
    <!--/ Header + subtitle -->

    <!-- Personal details + Google map -->
<!--    <h3>Office Details</h3>-->
    <div class="clear-fix contact-details">

        <div id="contact-details" class="contact-details-about">
            <p>
                <span id="visual-poster" class="bold">Visual Posters</span><br />
                1300 662 502<br />
                <i id="location"></i><span id="address">20B Janette Street, Traralgon, 3844 <br />(a Frontone Pty Ltd company)</span>
            </p>
<!--            <ul class="no-list">
                <li class="icon-2 icon-2-1">1300 662 502</li>
                <li class="icon-2 icon-2-3">E: <a href="mailto:info@visualposters.com.au?Subject=Hello" style="color: #fff;">info@visualposters.com.au</a></li>
            </ul>-->

        </div>
        <div id="sales-inq">
            <div class="sales-inq-arrow"></div>
            <p id="sales-general-inq">
                Sales & General Inquiries
            </p>
            <ul class="no-list">
                <li class="contact-person mike"><i class="mike"></i><span class="name">Mike T</span></li>
                <li class="contact-number"><i></i>0351759101</li>
                <li class="contact-email"><i></i><a href="mailto:gumby@visualposters.com.au?Subject=Hello" target="_blank">gumby@visualposters.com.au</a></li>
                <li class="contact-person chris"><i class="chris"></i><span class="name">Christopher C</span></li>
                <li class="contact-number"><i></i>0351759105</li>
                <li class="contact-email"><i></i><a href="mailto:pokey@visualposters.com.au?Subject=Hello" target="_blank">pokey@visualposters.com.au</a></li>
            </ul>
        </div>
<!--        <div class="contact-details-map">
            <div class="contact-details-map-arrow"></div>
            <iframe width="245" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=janette+street+traralgon&amp;aq=&amp;sll=-38.204667,146.537029&amp;sspn=0.002331,0.004823&amp;doflg=ptk&amp;ie=UTF8&amp;hq=&amp;hnear=Janette+St,+Traralgon+Victoria+3844,+Australia&amp;t=m&amp;ll=-38.204229,146.537704&amp;spn=0.006745,0.010471&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe><br />
        </div>-->

    </div>
    <p>
        Meeting exciting people, starting new projects and concepts is what makes us tick. So go on, get in touch.. We work quite hard and luckily we LOVE it!
    </p>

    <h3>EMAIL FORM</h3>
    <p>
        One quick favor to make our conversation more productive, let us know what event you're working on and a phone number so we can give you great advice.
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