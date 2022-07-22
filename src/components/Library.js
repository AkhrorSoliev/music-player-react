import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              setCurrentSong={setCurrentSong}
              key={song.id}
              song={song}
              songs={songs}
              audioRef={audioRef}
              isPlaying={isPlaying}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Library
