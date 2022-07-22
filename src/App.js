import { useState } from 'react'
// import styles
import './styles/app.scss'

// adding components
import Player from './components/Player'
import Song from './components/Song'
// import data
import data from './util'

function App() {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[6])
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  )
}

export default App
