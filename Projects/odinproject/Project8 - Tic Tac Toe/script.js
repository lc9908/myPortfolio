const gameBoard = () =>{
    const board = ['','','','','','','','',''];
    let count = 0;
    const player = ['❌','⭕']
    let result = false

    const getCurrentPlayer = () => player[count % 2]
    const getResult = () => result
    const getTurn = () => `${player[count%2]}'s turn`;

    const reset = () => {
        board.fill('')
        count = Math.floor(Math.random() * 2)
    }

    const getCount = () => count

    const placeBoard = index => {
        console.log(player[count%2])
        if(board[index] == ''){
            board[index] = player[count%2]
            count++;
            result = getWinningCondition();
        }
    }

    const getWinningCondition = () =>{
        let winningCondition = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]
        ];

        for(let x of winningCondition){
            if(board[x[0]-1] && board[x[1]-1] && board[x[2]-1] && board[x[0]-1] == board[x[1]-1] && board[x[1]-1] == board[x[2]-1]){
                return `${board[x[0]-1]} win`
            }
        }
        return false;
    }

    return {getTurn, getResult, getCount, reset, placeBoard, getCurrentPlayer}
}

const game = gameBoard();
const result = document.querySelector(".result")
const playagain = document.querySelector(".playagain")
const cells = document.querySelectorAll(".cell")
const turn = document.querySelector(".turn")
whoTurn();

function whoTurn(){
    turn.textContent = game.getTurn();
}

function placeBoard(e, n){
    if(!e.target.textContent){
        e.target.textContent = game.getCurrentPlayer()
        game.placeBoard(n)
    }

    if(game.getResult()){
        console.log(game.getResult())
        playagain.style.visibility = "visible"
        result.textContent = game.getResult()
    } else if(!game.getResult() && game.getCount() == 9){
        playagain.style.visibility = "visible"
        result.textContent = "It is a TIE game"
    }

    whoTurn();
}

function reset(){
    playagain.style.visibility = "hidden"
    game.reset()
    cells.forEach(cell =>{
        cell.textContent = ''
    })
    whoTurn();
}
