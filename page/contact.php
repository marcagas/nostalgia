<?php require_once('../plugin/contact-form/config.php'); ?>

  <div class="page-contact clear-fix wrapper">
      <header>
          <h1>Contact Us</h1>
          <h3>This is what our door looks like.</h3>
      </header>

      <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.ph/?ie=UTF8&amp;ll=-38.205038,146.537683&amp;spn=0.006989,0.009817&amp;t=h&amp;z=17&amp;output=embed"></iframe>

      <div class="content" style="margin-top: 30px;">
          <div class="row">
              <div class="span5">
                  <p>Feel free to contact us from Monday - Friday , 8AM to 9PM weeknights.
                      Meeting exciting people, starting new projects and concepts is what makes us tick.
                      So go on, get in touch.. We work quite hard and luckily we LOVE it!
                  </p>
                  <p>
                      One quick favor to make our conversation more productive,
                      let us know what product or service you need help with.
                  </p>
              </div>
          </div>

          <div id="contact-us-wrapper" class="row">
              <div class="span5">
                  <form id="contact-us-form" class="well" action="">
                      <label>Name</label>
                      <input type="text" class="span3" id="name" placeholder="name" />
                      <label>Contact</label>
                      <input type="text" class="span3" id="contact" placeholder="contact" />
                      <label>Email</label>
                      <input type="text" class="span3" id="email" placeholder="email" />
                      <label>Message</label>
                      <textarea class="input-xlarge" id="message" rows="3" placeholder="Your message here..."></textarea>
                      <div class="form-actions">
                          <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
