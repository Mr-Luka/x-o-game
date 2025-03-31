import './index.css'
import Player from './assets/Player.jsx'

function App() {


  return (
      <div id="game-container">
        <ol id="players" className="highlight-player"> 
          <Player />
          <Player />
        </ol>

      </div>
  )
}

export default App
