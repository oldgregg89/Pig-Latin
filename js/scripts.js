//Business logic

function transpigLatin (inputSentence) {
  let vowels = ['a','e','i','o','u']
  let newStr = ("")
  if (vowels.indexOf(inputSentence) > -1) {
        newStr =  inputSentence + "way";
        return newStr;
  }
  else {
        let firstMatch = inputSentence.match(/[aeiou]/g) || 0;
        let vowel = inputSentence.indexOf(firstMatch [0]);
        newStr = inputSentence.substring(vowel) + inputSentence.substring(0, vowel) + "ay";
        return newStr;
      }
  };
//UI logic
$(document).ready(function(){
  $("form#sentence").submit(function(event) {
    event.preventDefault ();
    let inputSentence = $("input#sentence1").val();
    let result = transpigLatin(inputSentence);

    $("p#output").text(result);
  });
});