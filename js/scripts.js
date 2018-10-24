// Business Logic here
var outputArray = [];
var piggy = function(wordsArray) {
  wordsArray.forEach(function(word) {
    var char = word.search(/[aeiou]/g);
    var charQU = word.search(/(qu)/g);
    var charNUM = word.search(/\d/g);
    //debugger;
    if (charNUM === 0) {
      switch(charNUM) {
        default:
          word = word;
          break;
      }
    } else if (charQU === 0) {
      switch(charQU) {
        default:
          word = word.replace("qu", "") + word.substr(charQU,2) + "ay";  
          break;
      }
    } else {
    switch(char) {
      case 0:
        word = word + "way";
        break;
      case - 1:
        word = word + "ay";
        break;
      default:
        word = word.substr(char) + word.substr(0,char) + "ay";
    }
    }
    outputArray.push(word);
  }); 
};

// User Interface Logic below
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#userInput").val();
    var wordsArray = sentence.split(" ");
    piggy(wordsArray);
    newOutputArray = outputArray.join(" ");
    $("#userOutput").text(newOutputArray);

  });
});