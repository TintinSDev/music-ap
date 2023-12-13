import React from "react";

function MusicList({music}) {
  const musicList = music || [];

      
  return (
    <div className="ui four column grid">
      <div className="row">
      {musicList.map((song) => (
          <div className="music-item" key={song.id}>
            <a href={song.url} target="_blank" rel="noopener noreferrer">
              <video width="320" height="240" controls>
                <source src={song.url} type="video/mp4" />
              </video>
            </a>
            <br />
            <span>{song.title}</span>
            <br />
            <span>{song.artist}</span>
            <br />
            <span>{song.genre}</span>
            <br />
            <span>{song.duration}</span>
            <br />
            <span>{song.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicList;
