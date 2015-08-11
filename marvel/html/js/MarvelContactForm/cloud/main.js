
Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("athulkrishnan", "walterisaacs0n");
 
  var name = request.params.name;
  var email = request.params.email;
  var subject = request.params.subject;
  var message = request.params.message;
 
  sendgrid.sendEmail({
   to: "atk007@gmail.com",
   from: email,
   fromname: name,
   subject: "Marvel - Contact Us Message",
   text: "Name: "+name+"\nEmail: "+email+"\nSubject: "+subject+"\nMessage:\n\n"+message
   }, {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
    }
  });
});