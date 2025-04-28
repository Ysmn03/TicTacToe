const cells=document.getElementsByClassName('cell-content')
const player=['X','O']
let currentPlayer=player[0]
let round=0;
let IsFinished=false;
const all_winnings=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function IsWin(){
    return all_winnings.some(comb=>
        comb.every(index=>
            cells[index].textContent==currentPlayer
        )
    );
}
turn.textContent=`It's ${currentPlayer} turn to play`
for(let i=0;i<cells.length;++i){
    cells[i].addEventListener('click',()=>{
        if(!IsFinished){
            if(cells[i].textContent.trim()===''){
                cells[i].textContent=currentPlayer

                ++round;

                if(round>=5){
                    IsFinished=IsWin();
                    if(IsFinished){
                        message.textContent=`Player ${currentPlayer} has won!`
                        return
                    }
                }

                currentPlayer=(currentPlayer===player[0])?player[1]:player[0]

                if(round===9&&!IsFinished){
                    message.textContent=`It's a draw`
                    return
                }
                else if(round!==9){
                    turn.textContent=`It's ${currentPlayer} turn to play`
                }
            }
        }
    });
}