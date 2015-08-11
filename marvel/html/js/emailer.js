
$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("HZT50nsMdPxnIfHwZE5ha7A3YKHcDpvvspdKuSxV", "qaR5WEqmcrg20RZWPey4nKkSDHoHWWZeteqpv3Uy");

  // Setup the form to watch for the submit event
  $('#contact-form').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      name: document.getElementById('name').value, 
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    }
    
    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        window.location.href = "formsuccess.html";
        // $('#response').html('Email sent!').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Message not sent. Please make sure all details are entered correctly.').addClass('error').fadeIn('fast');
      }
    });
  });

});