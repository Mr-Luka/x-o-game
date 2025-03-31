import {useState} from 'react';

import './index.css'
import Player from './assets/components/Player.jsx';
import GameBoard from './assets/components/GameBoard.jsx';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function App() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard)
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer(curActivePlayer => curActivePlayer === 'X' ? 'O' : 'X');
    setGameBoard(prevBoard => {
      const newBoard = [...prevBoard];
      newBoard[rowIndex][colIndex] = activePlayer;
      return newBoard;
    })
  }



  return (
      <div id="game-container">
        <ol id="players" className="highlight-player"> 
          <Player playersName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player playersName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard
          handlePlayersMove={handleSelectSquare}
          board={gameBoard}
          />
      </div>
  )
}

export default App
