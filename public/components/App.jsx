import React, { useState } from 'react';
import SearchBar from './SearchBar';

export default function App() {
    const [allSongs, setAllSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/songs'); 
            const data = await response.json();
            setAllSongs(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    function handleSearch(searchSong) {

        const filteredSongs = allSongs.filter(({ title, genre, artist }) =>
        [title, genre, artist].some(song =>
          song.toLowerCase().includes(searchSong.toLowerCase())
        )
      );
      setFilteredSongs(filteredSongs);
    };
    return (
        <div>
            <h1>Favorite Songs</h1>
            <SearchBar onSearch={handleSearch} />

            <h2>Filtered Songs:</h2>
            <ul>
                {filteredSongs.map((song) => (
                    <li key={song.id}>{song.title} - {song.artist} ({song.duration})</li>
                ))}
            </ul>
        </div>
    );
};


