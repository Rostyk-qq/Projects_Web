// all elenments for create
const endMenu = document.querySelector('#end_menu');
const bestScore =  endMenu.querySelector('#score_best span');
const restartBtn = endMenu.querySelector('#restart_game');

// canvas & container
const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d'); 

// we use this for blurry canvas after we get collisions
const gameContainer = document.querySelector('#main_container');

const imageBall = new Image();
imageBall.src = './assets/flappy_dunk.png';

// reset 
restartBtn.addEventListener('click', hideEndMenu)

//constants(abstract)

// flappy params
const FLAP_SPEED = -5; 
const BIRD_WIDTH = 40;
const BIRD_HEIGTH = 30;

// pipe params
const PIPE_WIDTH = 50;
const PIPE_GAP =  125;

// Bird Variables
let birdX = 50;
let birdY = 50;
let birdVelocity = 0;
let birdAcceleration = 0.1;

// Pipe Variables
let pipeX = 400;
let pipeY = canvas.height - 200;
let a = false;
// end-menu score
let score =  endMenu.querySelector('#score span');
// screen_score(user)
let userScore = document.querySelector('#dynamic_count');

// for set score
let scoreTemp = 0;
let bestScoreTemp = 0;

// create event for click on key(space)
document.body.onkeydown =  function(e) {
    if(e.code === 'Space'){
        birdVelocity = FLAP_SPEED;
    }
}
function increment(){
    if(birdX > pipeX + PIPE_WIDTH && (birdY < pipeY || birdY > pipeY) && !a){
        scoreTemp++;
        score.innerHTML = scoreTemp;
        userScore.innerHTML = scoreTemp;
        a = true
    }
    if(birdX < pipeX + PIPE_WIDTH){
        a = false;
    }
}
function endGame() {
    showEndMenu();
}
function resetGame() {
    birdX = 50;
    birdY = 50;
    birdVelocity = 0;
    birdAcceleration = 0.2;

    pipeX = 400;
    pipeY = canvas.height - 200;

    scoreTemp = 0;
    userScore.innerHTML = 0
}
function showEndMenu() {
    endMenu.style.display = 'block';
    gameContainer.classList.add('backgroun_blur');
    score.innerHTML = scoreTemp;
    if(bestScoreTemp <= scoreTemp){
        bestScoreTemp = scoreTemp;
        bestScore.innerHTML = bestScoreTemp
    }
}
function hideEndMenu() {
    endMenu.style.display = 'none';
    gameContainer.classList.remove('backgroun_blur');
    resetGame(); 
    loop();
}
function collicionsCheck(){
    const birdParams = {
        x: birdX,
        y: birdY,
        width: BIRD_WIDTH,
        height: BIRD_HEIGTH
    }
    const topColumn = {
        x: pipeX,
        y: pipeY - PIPE_GAP,
        width: PIPE_WIDTH,
        height: pipeY - PIPE_GAP
    }
    const bottomColumn = {
        x: pipeX,
        y: pipeY + PIPE_GAP,
        width: PIPE_WIDTH,
        height: pipeY
    }
    if(birdParams.x +(BIRD_WIDTH + (BIRD_WIDTH / 3)) > topColumn.x
        && topColumn.x + (BIRD_WIDTH + (BIRD_WIDTH / 3)) > birdParams.x
        && birdParams.y - (BIRD_HEIGTH / 3) < topColumn.y) {
        return true;
    }
    if(birdParams.x + (BIRD_WIDTH + (BIRD_WIDTH / 3))  > bottomColumn.x
        && bottomColumn.x + (BIRD_WIDTH + (BIRD_WIDTH / 3)) > birdParams.x
        && birdParams.y + (BIRD_HEIGTH + (BIRD_HEIGTH / 2))  > bottomColumn.y){
            return true;
        }
    if(birdY < 0 || birdY + (BIRD_HEIGTH + (BIRD_WIDTH / 3)) > canvas.height){
        return true;
    }
}
function loop() {
    //reset the flappy bird every loop iteration
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // draw Bird
    ctx.drawImage(imageBall, birdX, birdY);
    birdVelocity += birdAcceleration;
    birdY += birdVelocity;

    // drow pipes
    ctx.fillStyle = '#333';
    ctx.fillRect(pipeX, -100, PIPE_WIDTH, pipeY); // верхня -  тобто тут в нас height(pipeY) буде різна від(pipeY - бед рондомно від 0 до 550); 
    ctx.fillRect(pipeX, pipeY + PIPE_GAP, PIPE_WIDTH, canvas.height - pipeY); 
    // тобто задум такий ми дберемо рондомне значенння для pipeY воно буде (від 0 до 550) наприклад візьмемо
    // 550 зверху це буде 500 а з низу 600 - 550 = 50 буде виходити різниця 50 
    if(collicionsCheck()){
        endGame();
        return;
    }
    // run pipes
    pipeX -= 2.5
    if (pipeX < -50) {
        pipeX = 500;
        pipeY = Math.random() * (canvas.height - PIPE_WIDTH);
    }
    increment();
    requestAnimationFrame(loop);
}
loop();