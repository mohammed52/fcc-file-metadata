$(document).ready(function() {

  $('#uploadForm').submit(function() {
    $("#status").empty().text("File is uploading...");

    $(this).ajaxSubmit({

      error: function(xhr) {
        status('Error: ' + xhr.status);
      },

      success: function(response) {
        console.log(response)
        // $("#status").empty().text(response);
        $("#status").empty().text("File is uploaded!");
        alert("File Size: " + response)

      }
    });

    return false;
  });
});