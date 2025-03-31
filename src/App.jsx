import './index.css'
import Player from './assets/Player.jsx'

function App() {


  return (
    <> 
      <div className="game-wrapper">
        <div className='players-wrapper'>
          <Player />
          <Player />
        </div>
        <div className="game-board">
          
        </div>
      </div>
      
    </>
  )
}

export default App
