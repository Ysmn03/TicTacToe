window.onload = function() {
    const cells=document.getElementsByClassName('cell')
    const message=document.createElement('div');
    const player=['X','O']
    let currentPlayer=player[0]
    var round=0;
    var IsFinished=false;
    board.after(message)
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
    
    function IsWin(currentPlayer){
        for(let i=0;i<all_winnings.length;++i){
            if(cells[all_winnings[i][0]].textContent===currentPlayer
                &&cells[all_winnings[i][1]].textContent===currentPlayer
                &&cells[all_winnings[i][2]].textContent===currentPlayer){
                return true
            }
        }
        return false
    }
    
    for(let i=0;i<cells.length;++i){
        cells[i].addEventListener('click',()=>{
            if(!IsFinished){
                if(cells[i].textContent.trim()===''){
                    cells[i].textContent=currentPlayer
                    ++round;
                    if(round>=5){
                        IsFinished=IsWin(currentPlayer)
                        if(IsFinished){
                            message.textContent=`Player ${currentPlayer} has won!`
                            return
                        }
                    }
                    if(round===9&&!IsFinished){
                        message.textContent=`It's a tie`
                        return
                    }
                    if(currentPlayer===player[0]){
                        currentPlayer=player[1]
                    }else{
                        currentPlayer=player[0]
                    }
                }
                message.classList.add('text-danger','text-center','fs-1','font-monospace')
            }
        });
        
    }
};
