let submitButton = document.getElementById("submitButton");
let wordInput = document.getElementById("wordInput");
let currentWord = document.getElementById("currentWord");

let word = "apple";
let predefArr = word.split('');

let guessWord;
let priorWord1 = document.getElementById("priorWord1");
let priorWord2 = document.getElementById("priorWord2");
let priorWord3 = document.getElementById("priorWord3");
let priorWord4 = document.getElementById("priorWord4");
let holderWord;
let newText = "";
let tryamount = 0;
let compareText;

submitButton.onclick = function()
{
   guessWord = wordInput.value;
   //console.log(guessWord);
   if(guessWord.length == 5){
    priorWord4.innerHTML = priorWord3.innerHTML;
    priorWord3.innerHTML = priorWord2.innerHTML;
    priorWord2.innerHTML = priorWord1.innerHTML;
    priorWord1.innerHTML = currentWord.innerHTML;
    wordGuess(guessWord);
   } else 
   {
    alert("you're so fuckin stupid type a 5 letter word dumbass have u not played werdl before");
   }
}

function wordGuess(guessWord)
{
    currentWord.innerHTML = guessWord;
    compare = (predef,word) => {
        return word
               .split('')
               .map( (letter,i) => {
                 if (predef[i] === letter) return '<span style="color:green">'+guessWord.charAt(i)+'</span>';
                 if (predef.includes(letter)) return '<span style="color:yellow">'+guessWord.charAt(i)+'</span>';
                 return guessWord.charAt(i)
               });
        
      }
      result = compare(predefArr, guessWord).join("");
      console.log(result);
      compareText = result.toString();
      currentWord.innerHTML = result.toString();
      tryamount += 1;
      console.log(tryamount);

      if(tryamount > 5)
      {
        loseScreen();
      }
}

function loseScreen()
{
alert("you fucking suck im bored im gonna kill you bye you lose");
tryamount = 0;
}
