/* global $,document,console */
$(document).ready(function() {

    var parseAPPID = "1N6IyQCdkTnmyIoZ4GknYWrfTtV53XPrrBD02qJw";
    var parseJSID = "3cY0kPrVG1eJLR4JTM66cQd3hUQNJMcMgFulVsPE";
    
    Parse.initialize(parseAPPID, parseJSID);
    var CommentObject = Parse.Object.extend("CommentObject");
        
    $("#contact-form").on("submit", function(e) {
        e.preventDefault();

        console.log("Handling the submit");
        //add error handling here
        //gather the form data

        var data = {};
        data.name = $("#name").val();
        data.email = $("#email").val();
        data.subject = $("#subject").val();
        data.message = $("#message").val();

        var message = new CommentObject();
        message.save(data, {
            success:function() {
                console.log("Success");
                //Alerts are lame - but quick and easy
                alert("Thanks for getting in touch!");
            },
            error:function(e) {
                console.dir(e);
            }
        });

    });
    
});