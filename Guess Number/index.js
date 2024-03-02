const containerwraperel = document.querySelector(".conatiner-wrapper");
const btnagainel = document.querySelector(".btn-again");
const guessnumel = document.querySelector(".guess-num");
const Inputnumel = document.querySelector(".Num-input");
const btncheckel = document.querySelector(".btn-check");
const msgel = document.querySelector(".msg");
const scoreel = document.querySelector(".score");
const Highscore = document.querySelector(".Highscore");
const hidenumel = document.querySelector(".hidenum");


// Write a random number 
let randomnum = Math.trunc(Math.random()  * 15 + 1);

let score = 20;
let hightscore = 0;

console.log(randomnum);

  

  btncheckel.addEventListener("click" , (event)=>{

  event.preventDefault(); // Prevent page refresh
      
     const guess = Number(Inputnumel.value);
           
     

    if(guess){


        if(guess != randomnum){

            if(score > 1){

                 score--;

                 scoreel.textContent = score;

                   msgel.textContent = guess > randomnum ? "You Guess Too High " : " You Guess Too Low";
                   scoreel.textContent = score;
  


            }
            else{
                displayMessage("You have lose the game");
                scoreel.textContent = 0;
             
            }

        }
        else{
            hidenumel.textContent = randomnum;
            hidenumel.style.width ="50%";
            displayMessage("Conguratulation you win the game");
        }
       
    }
    else{
        displayMessage("Please Enter Lucky Number");
           scoreel.textContent = 0;
    }

           
  });


  const displayMessage = function(message){
    msgel.textContent = message;
  }



  btnagainel.addEventListener('click', ()=>{
    score = 20;
    randomnum = Math.floor(Math.random()*15 + 1);
    scoreel.textContent = score;
    hidenumel.textContent = "?";

    Inputnumel.value = "";
    displayMessage("Starting Game ...");
    


  })