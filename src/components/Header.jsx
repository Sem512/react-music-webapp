import React, { useState } from 'react';
import axios from 'axios';

function checkEnter(e){
    
}

function Header({setResults}) {
    const [query, setQuery] = useState('');

   
    
    const handleSearch = async () => {

        try {
            const response = await axios.get(`https://api.deezer.com/search?q=${query}`);
            setResults(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Failed to fetch search results');
        }
    };
    
    return (
        <header className="header">
            <div className="logo">Deezer</div>
            <div className="search-container">
                <input 
                    type="text" 
                    name="search" 
                    id="searchbar" 
                    placeholder="What song do you want to play?" 
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e)=> e.key=="Enter"?handleSearch():setQuery(e.target.value)}
                />
                <button onClick={handleSearch} className="search-button"><i className="fi fi-rs-search"></i></button>
            </div>

        </header>
    );
}
export default Header;