
$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("fpF4ApPzo9rf1JJR2UgtWUZD9lZXUWjxZIAnFil3", "6GLuXWmYv4ScjocYsB7QJSUVdGxA6d8ULPzECveQ");

  // Setup the form to watch for the submit event
  $('#app-form').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      appname: document.getElementById('appname').value, 
      appemail: document.getElementById('appemail').value,
      appphone: document.getElementById('appphone').value,
      appaddress: document.getElementById('appaddress').value,
      appposition: document.getElementById('appposition').value,
      appmessage: document.getElementById('appmessage').value
    }
    
    // resume: document.getElementById('resume').value

    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        // window.location.href = "formsuccess.html";
        $('#response').html('Email sent!').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Application not sent. Please make sure all details are entered correctly.').addClass('error').fadeIn('fast');
      }
    });
  });

});