let boxes=document.querySelectorAll(".box")
let resetbutton=document.querySelector("#resetbtn")
let newGamebutton=document.querySelector("#newbtn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turnO=true;  //playerX //playerO
let count=0

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was Clicked")
        if(turnO){
            box.innerText = "O"
            box.classList.add("ocolor")
            box.classList.remove("xcolor")
            turnO=false
        }else{
            box.innerText = "X"
            // box.style.color="blue";
            box.classList.add("xcolor")
            box.classList.remove("ocolor")
            turnO=true
        }
        
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count ==9 && !isWinner){
            gameDraw();
        }
    })
})


const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // )
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val==pos3Val){
                // console.log("Winner ",pos1Val)
                showWinner(pos1Val)
            }
        }
    }
}


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disableBoxes()
}

const gameDraw=()=>{
    msg.innerText=`Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const resetGame=()=>{
    turnO=true;
    count=0
    enableBoxes();
    msgcontainer.classList.add("hide")
}

newGamebutton.addEventListener("click",resetGame)
resetbutton.addEventListener("click",resetGame)