import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
export const Player = ({
  audioRef,
  isPlaying,
  songInfo,
  setSongInfo,
  setIsPlaying,
}) => {
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

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

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
          {!isPlaying ? (
            <FaPlay onClick={playSongHandler} className="play" />
          ) : (
            <FaPause onClick={playSongHandler} className="play" />
          )}
          <FaAngleRight className="skip-forward" />
        </div>
      </div>
    </div>
  )
}

export default Player
