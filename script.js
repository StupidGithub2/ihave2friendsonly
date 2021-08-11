const guesses=document.querySelector(".guesses")
const result=document.querySelector(".result")
const comparison=document.querySelector(".comparison")
const guessSubmit=document.querySelector(".guessSubmit")
const guessField=document.querySelector(".guessField")




function tenSeconds(){
    setInterval(() => {
        alert("This is your father speaking your mother has died due to your failure.I will disown you.")
    }, 100000);
}
window.addEventListener("DOMContentLoaded",tenSeconds)
function stoptenseconds(){
    clearInterval(reminder);
}
var randomNum=Math.floor(Math.random()*100)+1;
var guessCount =1;
var winningsound=new Audio("c.m4a")
var losingsound= new Audio("68 Lee Garden Road 6.m4a")
function checkGuess(){
    console.log("high")
    let userGuess=Number(guessField.value)
    if (guessCount===1){
        guesses.textContent="Previous Guesses:"
    }
    if (userGuess===randomNum){
        result.textContent="......... ... ... ........... ....."
        result.style.backgroundColor="green"
        comparison.textContent=""
        winningsound.play();
        alert("The password is ... you have ... ... so you ...")
        setGameOver();
    }
    else{
        switch(guessCount){
            case 10:
            result.textContent="......... ... ... ........... ....."
            comparison.textContent=""
            losingsound.play();
            alert("i have corona cuz of u")
            setGameOver();
            break;
            default:
            result.textContent="password is ....."
            result.style.backgroundColor="red"
            if(userGuess<randomNum){
                comparison.textContent="your guess was to low"
            }
            else if (userGuess>randomNum){
                comparison.textContent="your guess was to hi"
            }
        }
    }
    
    guessCount++
    guessField.value=""
    
}
guessSubmit.addEventListener("click",checkGuess)
function setGameOver(){
    guessSubmit.disabled=true
    guessField.disabled=true
    stoptenseconds();
}
