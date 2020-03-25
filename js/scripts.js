$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);
    $("#letter").show();

    event.preventDefault();
  });

  $("form#formTwo").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name2").text(name2Input);
    $("#letter2").show();

    event.preventDefault();
  });
});