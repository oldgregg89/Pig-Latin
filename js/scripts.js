//Business logic



//UI logic
$(document).ready(function(){
  $("form#sentence").submit(function(event) {
    event.preventDefault ();
    const inputSentence = $("input#sentence1").val();

    function transpigLatin (inputSentence) {
      let vowels = ['a','e','i','o','u']
      let newStr = ("")
      if (vowels.indexOf(inputSentence[0]) > -1) {
        newStr =  inputSentence + "way";
        return newStr;
      } 
      else {
        let firstMatch = inputSentence.match([a,e,i,o,u]) || 0;
        let vowel = inputSentence.indexOf(firstMatch [0]);
        newStr = inputSentence.substring(vowel) + inputSentence.substring(0, vowel) + "ay";
        return newStr;
      }
    };
    //if (inputSentence[i] = a; inputSentence[i = e; )
        //.push("way")
    //return 
    $("p#output").print(newStr);
  });
});