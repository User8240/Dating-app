$(document).ready(function() {
  $("form#matchmaking").submit(function(event) {
  
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

  if (age < 30 && gender === 'male') {
    $("#match").text("Miley Cyrus"); 
  } else if (age > 30 && gender === 'male') {
    console.log(age);
    $("#match").text("Emma Stone");
  } else if (age < 30 && gender === 'female') {
    $("#match").text("Johnny Depp");
  } else /*(age > 30 && gender === 'female')*/ {
    $("#match").text("Patrick Osten");
  }

  //$(".match").click(function() {
  //  $(".word-showing").toggle();
  //  $(".word-hidden").toggle();

  event.preventDefault();
  });
});