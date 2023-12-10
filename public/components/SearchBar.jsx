import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    // intoduce state to track users search
    const [searchSong, setSearchSong] = useState('')

    // define a varibale handleChange that detects changes in the input

    function handleChange(event) { 
        setSearchSong(event.target.value)
        onSearch(event.target.value)
    }
    return (
        <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Enter your favorite song or genre"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
    )
}