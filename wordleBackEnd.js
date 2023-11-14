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

submitButton.onclick = function()
{
   guessWord = wordInput.value;
   //console.log(guessWord);
   wordGuess(guessWord);
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
      currentWord.innerHTML = result.toString();

}
