let random;
let chances=0;
document.getElementById("startbtn").addEventListener("click", function() {
random=Math.floor(Math.random()*101)
document.getElementById("startbtn").style.display="none"
document.getElementById("guessInput").style.display="inline";
document.getElementById("guessBtn").style.display="inline";
document.getElementById("message").textContent = "Game started! Enter a number between 1 and 100.";
document.getElementById("chances").textContent = "";
});
document.getElementById("guessBtn").addEventListener("click",function()
{
    
    const guess=Number.parseInt(document.getElementById("guessInput").value)
    chances++;
    if (!guess || guess < 1 || guess > 100)
    {
        document.getElementById("message").textContent="Please eneter a valid number";
        return;
    }
    if(guess==random)
    {
        document.getElementById("message").textContent=`You have guessed the correct no it was ${random}!`;
        document.getElementById("chances").textContent=`You guessed it in ${chances} attempts`;
       
    }
    else if(guess<random){
        document.getElementById("message").textContent="Your guess is lower than the number";
        
    }
    else{
         document.getElementById("message").textContent="Your guess is higher than the number";

    }


});