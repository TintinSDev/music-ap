import React from "react";

export default function SearchBar(handleSearch) {

    return (
        <div >
        <input
          type="text"
          placeholder="Search your song"
          onChange={handleSearch}
        />
        <i className="circular search link icon"></i>
      </div>
    )
}