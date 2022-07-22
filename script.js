let grids= document.getElementsByClassName('col')
let currentTurnText = document.getElementById('current-turn-text')
let currentTurn = 1  // 1: Player 1, 2: Player 2
let  gameOver= false
const playerTicker = {
    1:'X',
    2:'O'
}
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const singleMove=(index)=>{
    // grids[index].innerText = 'X'
    if(!gameOver && !grids[index].innerText){
        grids[index].innerText = currentTurn === 1 ? playerTicker[1] : playerTicker[2]
        let winningPlayer = checkWinningStatus()
        if(winningPlayer != 'No Winner'){
            gameOver = true
            //alert(winningPlayer === 'X' ? 'Player 1 Won!' : 'Player 2 Won!')
            currentTurnText.innerText = `Player ${currentTurn}'s won!`
            currentTurnText.style.backgroundColor = '#61c375'
            return 
        } 
        currentTurn = currentTurn === 1 ? 2 : 1
        currentTurnText.innerText = `Player ${currentTurn}'s Turn`       
    }    
}

const checkWinningStatus = () => {
        for(let i=0;i<winningCombinations.length; i++){
            combination = winningCombinations[i]
            if(combination.every(index =>grids[index].innerText && grids[index].innerText === grids[combination[0]].innerText)){
                addBorderStyle(combination)  
                return value = 'X' ? 1 : 2
            }

            // // or
            // if(grids[combination[0]].innerText=== grids[combination[1]].innerText && grids[combination[1]].innerText===
            //     grids[combination[2]].innerText && grids[combination[0]].innerText !== ''){
            //         return grids[combination[0]].innerText
            //     }
        }
        return  'No Winner'  
    }
    
const addBorderStyle = (indexArray)=>{
     indexArray.forEach(index => grids[index].style.cssText = 'background-color: #d0dce6 ')
}