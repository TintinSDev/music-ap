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
        // allSongs.filter(...) filters the array of all songs based on the provided condition.
        // .some() to check if at least one of the properties (title, genre, or artist)
        // of each song includes the lowercase version of the searchSong.
        // if a song meets the condition, it is included in the filteredSongs array.
        const filteredSongs = allSongs.filter(({ title, genre, artist }) =>
            [title, genre, artist].some(song =>
                song.toLowerCase().includes(searchSong.toLowerCase())
            )
        );
        // setFilteredSongs(filteredSongs) updates the state with the filtered songs
        setFilteredSongs(filteredSongs);
    };
    return (
        <div>
            <h1>Favorite Songs</h1>
            {/* // The SearchBar component calls the handleSearch function, which filters the songs based on the search term.  */}
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


