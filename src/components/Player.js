import { useRef, useState } from 'react'
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

  const getTime = (time) => {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
  }

  // state
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    })
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  })

  return (
    <div>
      <div className="player">
        <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>
          <input
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            type="range"
            onChange={dragHandler}
          />
          <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
          <FaAngleLeft className="skip-back" />
          <FaPlay onClick={playSongHandler} className="play" />
          <FaAngleRight className="skip-forward" />
        </div>
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  )
}

export default Player
