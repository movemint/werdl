let word = "apple";
let guessWord;
let priorWord1;
let priorWord2;
let priorWord3;
let priorWord4;


document.getElementById("submitButton").onclick = function()
{
   guessWord = document.getElementById("wordInput").value;
   //console.log(guessWord);
   firstWord(guessWord);
}

function firstWord(guessWord)
{
    document.getElementById("currentWord").innerHTML = guessWord;

switch(document.getElementById("currentWord").innerHTML.charAt(0) == word.charAt(0))
{
    case document.getElementById("currentWord").innerHTML.charAt(0) == word.charAt(0):
        console.log("yup");
        document.getElementById("currentWord").innerHTML = document.getElementById("currentWord").innerHTML.replace(document.getElementById("currentWord").innerHTML.charAt(0),  '<span style="color: green;">'+word.charAt(0)+'</span>');
    break;
}
}

