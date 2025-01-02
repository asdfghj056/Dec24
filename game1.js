var timer = 60;
var score =0;
var r_num=0;

function increaseScore(){

    document.querySelector("#scoreval").textContent = score;
    score +=10;
}

function makefunc(){
    let clutter = "";

for(let i=0; i<160;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#p_btm").innerHTML = clutter;

}
function getNewHit(){
    r_num = Math.floor(Math.random()*10)
    document.querySelector("#gethit").textContent = r_num;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
        }
        else
        {
            clearInterval(timerint);
            document.querySelector("#p_btm").innerHTML = `<h1> Game Over </h1>`;
            let h1 = document.querySelector("#p_btm h1");
            h1.style.color ="#ffff";
        }
        document.querySelector("#timerval").textContent = timer;
        
    },1000);
}
document.querySelector("#p_btm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === r_num){
        increaseScore();
        makefunc();
        getNewHit();
    }
    
})

increaseScore();
runTimer();
getNewHit();
makefunc();