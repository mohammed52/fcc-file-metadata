$(document).ready(function() {
  $("#form_selector").submit(function() {

    $.ajax({
      type: "POST",
      url: "form_handler.php",
      data: $(this).serialize(),
      success: function() {
        // callback code here
      }
    })

  })
})

function showUploadConfirmation() {
  console.log("upload successful");
  return;
}

showUploadConfirmation();