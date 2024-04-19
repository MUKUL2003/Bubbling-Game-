var timer = 60 ;
var score = 0 ;
var hitNum ;

document.querySelector('.pbtm').addEventListener('click' , function(details){
    var clickedNum = Number(details.target.textContent) ;
    if(hitNum === clickedNum){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

function increaseScore(){
    score +=10 ;
    document.querySelector('#scoreval').textContent = score ;
}

function getNewHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitNum ;
}

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