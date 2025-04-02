import {useState} from 'react';

import './index.css'
import Player from './assets/components/Player.jsx';
import GameBoard from './assets/components/GameBoard.jsx';
import Log from './assets/components/Log.jsx';
import {WINNING_COMBINATIONS} from './assets/components/winning-combinations.js';
import GameOver from './assets/components/GameOver.jsx';

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const PLAYERS = {
  'X': 'Player 1',
  'O': 'Player 2'
}

function deriveBoardGame(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray=> [...innerArray])];
  for (let turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }
  return currentPlayer;
}

function deriveWinner (gameBoard, players){
  let winner = null;
  for (let combination of WINNING_COMBINATIONS) {
    const firstSquareWin = gameBoard[combination[0].row][combination[0].column];
    const secondSquareWin = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareWin = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareWin && firstSquareWin === secondSquareWin && firstSquareWin === thirdSquareWin){
      winner = players[firstSquareWin];
    }
  }
  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [ players, setPlayers] = useState(PLAYERS);

  const gameBoard = deriveBoardGame(gameTurns);
  const activePlayer = deriveActivePlayer(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const draw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns(prevGameTurn => {
      const currentPlayer = deriveActivePlayer(prevGameTurn);

      const updatedTurn = [ {square: {row: rowIndex, col: colIndex}, player: currentPlayer} ,...prevGameTurn];
      return updatedTurn;
    })
  }


function handleReset(){
  setGameTurns([]);
}

function handlePlayerNameChange(symbol, name){
  setPlayers(prevPlayers => {
    return {
      ...prevPlayers,
      [symbol]: name
    }
  })
}


  return (
     <>
       <div id="game-container">
        <ol id="players" className="highlight-player"> 
          <Player 
            playersName={PLAYERS.X} 
            symbol="X" 
            isActive={activePlayer === 'X'} 
            onChangeName={handlePlayerNameChange}
          />
          <Player 
            playersName={PLAYERS.O} 
            symbol="O" 
            isActive={activePlayer === 'O'} 
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && <GameOver winner={winner} onReset={handleReset}/>}
        <GameBoard
          handlePlayersMove={handleSelectSquare}
          board={gameBoard}
          />
      </div>
      <Log 
        turns={gameTurns}
      />
     </>
  )
}

export default App
