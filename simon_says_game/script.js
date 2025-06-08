let gameseq = [];
let userseq = [];

let btns = ["yellow", "purple", "green", "red"];
let stared = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(stared == false){
        console.log("Game started");
        stared = true;

        levelUp();
    }
});


function gameFlash (btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function userFlash (btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    gameFlash(randbtn);
}

function checkAns (idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 800);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function (){
             document.querySelector("body").style.backgroundColor = "white";
        } ,150);
        reset ();
    }

}

function btnPress (){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    stared =false;
    gameseq = [];
    userseq = [];
    level = 0;
}