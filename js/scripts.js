// Business Logic here
var piggy = function(index) {
  if (/\d/g.test(index) === true) {
    return index;
  } else {
    var index = ("That is not true");
    return index;
  }  
};



// User Interface Logic below
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#userInput").val();
    $("#userOutput").text(piggy(sentence));
    console.log(sentence);

  });
});