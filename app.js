$(document).ready(function() {
  $(".submit").click(function(event) {
    console.log("Button Clicked");

    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
  });
});
