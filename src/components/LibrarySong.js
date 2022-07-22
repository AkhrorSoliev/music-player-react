const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying }) => {
  const { cover, name, artist, id } = song

  const songSelectHandler = (id) => {
    const selectedSong = songs.filter((state) => {
      return state.id === id
    })
    setCurrentSong(selectedSong[0])
    // check
    if (isPlaying) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play()
        })
      }
    }
  }

  return (
    <div
      onClick={() => {
        songSelectHandler(id)
      }}
      className="library-song"
    >
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
