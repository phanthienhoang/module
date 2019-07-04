<form id="contactform" name="contact" method="post" action="#">
  <p class="note"><span class="req">*</span> Asterisk fields are required</p>
  <div class="row">
    <label for="name">Your Name <span class="req">*</span></label>
    <input type="text" name="name" id="name" class="txt" tabindex="1" placeholder="Steve Jobs" required>
  </div>
 
  <div class="row">
    <label for="email">E-mail Address <span class="req">*</span></label>
    <input type="email" name="email" id="email" class="txt" tabindex="2" placeholder="address@domain.com" required>
  </div>
 
  <div class="row">
    <label for="subject">Subject <span class="req">*</span></label>
    <input type="text" name="subject" id="subject" class="txt" tabindex="3" placeholder="Advertising/Press Ideas" required>
  </div>
 
  <div class="row">
    <label for="message">Message <span class="req">*</span></label>
    <textarea name="message" id="message" class="txtarea" tabindex="4" required></textarea>
  </div>
 
  <div class="center">
    <input type="submit" id="submitbtn" name="submitbtn" tabindex="5" value="Send Message">
  </div>
</form>