import './index.css'
import Player from './assets/Player.jsx'

function App() {


  return (
      <div id="game-container">
        <ol id="players" className="highlight-player"> 
          <Player playersName="Player 1" symbol="X" />
          <Player playersName="Player 2" symbol="O"/>
        </ol>

      </div>
  )
}

export default App
