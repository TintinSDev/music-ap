import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    // intoduce state to track users search
    const [searchSong, setSearchSong] = useState('')

    // define a varibale handleChange that detects changes in the input

    function handleChange(event) { 
        const { value } = event.target;
    setSearchSong(value);
    onSearch(value); //This is a callback to handle search
    }
    return (
        <div className="search-bar">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Enter your favorite song or genre"
        value={searchSong}
        onChange={handleChange}
      />
    </div>
    )
}