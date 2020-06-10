//Business logic



//UI logic
$(document).ready(function(){
  $("form#sentence").submit(function(event) {
    event.preventDefault ();
    const inputSentence = $("input#sentence1").val();
    let vowels = ['a','e','i','o','u']
    let newStr = (""),

    if (vowels.indexOf(inputSentence[0])>0){
      newStr = str + "way"
      return newStr
    }
    else {

    }
    //if (inputSentence[i] = a; inputSentence[i = e; )
        //.push("way")
    //return 
    //}


  });
});