//BUISINESS LOGIC

var leapYear = function(year) {
  if (year %4 === 0) {
    return true;
  } else {
    return false;
  }

};

// USER INTERFACE

$(document).ready(function() {
  $("#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
