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
	<h3>On the map</h3>
	<div class="clear-fix contact-details">
		
		<div class="contact-details-about">
			
			Keith Douglas<br/>
			Quai Henri IV<br/>
			75004 Paris, France
			
			<ul class="no-list">
				<li class="icon-2 icon-2-1">T: 877 123 0223</li>
				<li class="icon-2 icon-2-2">F: 877 123 0224</li>				
				<li class="icon-2 icon-2-3">E: keith@douglas.com</li>			
			</ul>
			
		</div>
		
		<div class="contact-details-map">
			<div class="contact-details-map-arrow"></div>
			<div id="map"></div>
		</div>
		
	</div>
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