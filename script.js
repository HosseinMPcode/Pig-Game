'use strict'
const rollDiceBtn = document.querySelector('.rollDiceBtn');
const holdBtn = document.querySelector('.holdBtn');
const player1currentScore = document.querySelector('.player1currentScore');
const player2currentScore = document.querySelector('.player2currentScore');
const playerScore1 = document.querySelector('.playerScore1');
const playerScore2 = document.querySelector('.playerScore2');
const diceImg = document.querySelector('.diceImg');
const gameContainer = document.querySelector('.gameContainer');//For changing background
const winsModal = document.querySelector('.winsModal');
const winsModalPlayer = document.querySelector('.winsModalPlayer');
const gameStatus = document.querySelector('.gameStatus');
const overlay = document.querySelector('.overlay');
const newGmeBtn = document.querySelectorAll('.newGmeBtn');
let playerGameTurn = 1;
let currentScore = 0 ;
const addToCurrent = function(value){
    if(playerGameTurn === 1){
        player1currentScore.textContent = Number(player1currentScore.textContent)+value;
        currentScore =  Number(player1currentScore.textContent);
    }
    else if(playerGameTurn === 2){
        player2currentScore.textContent = Number(player2currentScore.textContent)+value;
        currentScore =  Number(player2currentScore.textContent);

    }
}
const emptyCurrent = function(){
    if(playerGameTurn === 1){
        player1currentScore.textContent = 0;
    } else{
        player2currentScore.textContent = 0;
    }
}
const changePlayerTurn = function(){
    if(playerGameTurn === 1){
        playerGameTurn = 2;
        gameContainer.style.background = `linear-gradient(to left, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3)  50%)`;
    }else{
        playerGameTurn = 1;
        gameContainer.style.background = `linear-gradient(to right, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3)  50%)`;
    }
}
const changeDiceImg = function(diceNumber){
    diceImg.src = `images/dice-${diceNumber}.png`;
}
const winingStyle = function(){
    document.body.style.background = '#90EE90';
    winsModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    gameStatus.textContent = `${playerScore1.textContent} to ${playerScore2.textContent} `
}
const checkWins = function(){
    if(playerGameTurn === 1 && Number(playerScore1.textContent) >= 100){
        console.log(playerScore1.textContent);
        winsModalPlayer.textContent = ` PLAYER 1 `;
        winingStyle();
    } else if(playerGameTurn === 2 && Number(playerScore2.textContent) >= 100){
        winsModalPlayer.textContent = ` PLAYER 2 `;
        winingStyle();
    }
}
rollDiceBtn.addEventListener('click',function(){
    const rollNumber = Math.floor(Math.random() * 6 + 1);
    changeDiceImg(rollNumber);
    if(rollNumber !== 1){
        addToCurrent(rollNumber);
    }else{
        emptyCurrent();
        changePlayerTurn();
        // playerGameTurn === 1 ? playerGameTurn = 2 : playerGameTurn=1;
    }
})
holdBtn.addEventListener('click',function(){
    if(playerGameTurn === 1){
        playerScore1.textContent = Number(playerScore1.textContent)+currentScore;
        checkWins();
        emptyCurrent()
        changePlayerTurn();
    }else{
        playerScore2.textContent = Number(playerScore2.textContent)+currentScore;
        checkWins();
        emptyCurrent()
        changePlayerTurn();
    }
});
for(let i = 0 ; i < newGmeBtn.length ; i++){
    newGmeBtn[i].addEventListener('click',function(){
        location.reload();
    })
}