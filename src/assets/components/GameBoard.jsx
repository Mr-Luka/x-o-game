export default function GameBoard({handlePlayersMove, board}) {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex)=> <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex)=> <li key={colIndex}>
                        <button
                            onClick={()=> handlePlayersMove(rowIndex, colIndex)}  
                            disabled={board[rowIndex][colIndex] !== null}
                        >{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}