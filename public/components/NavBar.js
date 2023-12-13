import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar';



function NavBar({ onSearch }) {
  const [searchSong, setSearchSong] = useState('')
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/music")
     .then((response) => response.json())
     .then((data) => setMusic(data))
     .catch((error) => console.error('Error fetching music:', error));
  }, [searchSong]);

 
  return (
    <nav>
      <div className="logo">
      
        <img src=" https://cdn-icons-png.flaticon.com/128/2467/2467389.png" alt="Harmony Hub"  /> 
        
      </div>
      {/* <h5 style={{color:"cyan"}}>Harmony Hub</h5> */}
      <div className="menu">
    
        <ul>
          <li>

            <a href="/">Home</a>
          </li>
          <li>
            <a href="/category">Category</a>
          </li>
        </ul>
        <div className="search-bar">
          <SearchBar onSearch={onSearch} />
         
        </div>
      </div>
    </nav>
  ); 
}

export default NavBar;
