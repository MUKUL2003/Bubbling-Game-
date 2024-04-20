var timer = 60 ;
var score = 0 ;
var hitNum ;
//Event Listener on the root of DOM tree , implementing th concept of Event Bubbling
document.querySelector('.pbtm').addEventListener('click' , function(details){
    var clickedNum = Number(details.target.textContent) ;
    if(hitNum === clickedNum){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
//Function to increase the score on hitting correct value
function increaseScore(){
    score +=10 ;
    document.querySelector('#scoreval').textContent = score ;
}
//Function to get new hit target 
function getNewHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitNum ;
}
//Function that runs the timer 
function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer-- ;
            document.querySelector('#timerval').textContent = timer ;
        }
        else{
            document.querySelector('.pbtm').innerHTML = `<h1> GAME OVER <h1>`;
            clearInterval(timerint);
        }
    } , 1000);
}
//func to add bubbles with random value in them
function makeBubble(){
    var clutter="" ;

    for(var i=0;i<168 ;i++){
        var temp = Math.floor(Math.random() *10);
        clutter += `<div class="bubble">${temp}</div>`; 
    }
    document.querySelector('.pbtm').innerHTML = clutter ;
}

runTimer();
makeBubble();
getNewHit();
