var formData = JSON.stringify($("#annForm").serializeArray());

$.ajax({
  type: "POST",
  url: "http://www.locusapp.xyz/locusapp/announcements/set_announcement",
  data: formData,
  success: function(){},
  dataType: "json",
  contentType : "application/json"
});