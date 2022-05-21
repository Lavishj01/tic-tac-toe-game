let turn="X";
let isGameOver=false;
let audio=new Audio("snare.wav")
let over=new Audio("over.wav")
let game=new Audio("game.mp3")

// function to change the turn
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}
// function to check for a win
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) &&(boxtexts[e[0]].innerText!=="")  ){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText +" "+"WON"
            isGameOver=true;
            over.play();
        }         
    })
}

// gameLogic
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(e=>{
        let boxtext=e.querySelector('.boxtext')
        e.addEventListener('click', ()=>{
           if(boxtext.innerText ===''){
               boxtext.innerText=turn;
                audio.play();
               turn=changeTurn();
               checkwin();
               if(!isGameOver){
                   document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
               }
           }
        })
    })
    // reset button
    reset.addEventListener("click",()=>{
        let boxtexts=document.querySelectorAll('.boxtext')
        Array.from(boxtexts).forEach(element => {
            element.innerText="";
        });
        turn="X";
        isGameOver=false;
    })

       


