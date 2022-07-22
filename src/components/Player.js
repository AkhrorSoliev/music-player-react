import { useRef } from 'react'
import { FaPlay, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
export const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  // ref
  const audioRef = useRef(null)

  // events handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div>
      <div className="player">
        <div className="time-control">
          <p>Start Time</p>
          <input type="range" />
          <p>End Time</p>
        </div>
        <div className="play-control">
          <FaAngleLeft className="skip-back" />
          <FaPlay onClick={playSongHandler} className="play" />
          <FaAngleRight className="skip-forward" />
        </div>
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player
