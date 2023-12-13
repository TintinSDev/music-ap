import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchSong, setSearchSong] = useState('');

    const handleChange = (event) => {
        setSearchSong(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchSong);
    };

    return (
        <div className="search-bar">
            <label htmlFor="search"></label>
            <input
                type="text"
                id="search"
                placeholder="Enter your favorite music"
                value={searchSong}
                onChange={handleChange}
            />
            <button type="button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}