
Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("athulkrishnan", "walterisaacs0n");

  var appname = request.params.appname;
  var appemail = request.params.appemail;
  var appphone = request.params.appphone;
  var appaddress = request.params.appaddress;
  var appposition = request.params.appposition;
  var appmessage = request.params.appmessage;
  // var resume = request.params.resume;
 
  sendgrid.sendEmail({
   to: "atk007@gmail.com",
   from: appemail,
   fromname: appname,
   subject: "Marvel - Job Application",
   text: "Name: "+appname+"\nEmail: "+appemail+"\nPhone: "+appphone+"\nAddress: "+appaddress+"\nPosition: "+appposition+"\nMessage:\n\n"+message
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