import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import MusicList from "./components/MusicList";
import SearchBar from './components/SearchBar';
import './App.css';

export default function App() {
    const [allSongs, setAllSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/music');
                const data = await response.json();
                setAllSongs(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (searchQuery) => {
        if (!searchQuery.trim()) {
            // If search query is empty, reset to the original list
            setFilteredSongs([]);
        } else {
            // Filter and update the music list based on the search query
            const filteredSongs = allSongs.filter(({ title, genre, artist }) =>
                [title, genre, artist].some((music) =>
                    music.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
            setFilteredSongs(filteredSongs);
        }
    };

    return (
        <div>
            <NavBar onSearch={handleSearch} />
            <SearchBar onSearch={handleSearch} />
            <MusicList music={filteredSongs.length > 0 ? filteredSongs : allSongs} />
        </div>
    );
};

