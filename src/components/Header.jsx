import React, { useState } from 'react';
import axios from 'axios';

import { NavLink, useNavigate } from "react-router-dom";

function checkEnter(e){
    
}

function Header({setResults}) {
    const [query, setQuery] = useState('');

    const navigate = useNavigate();

    const handleSearch = async () => {

        try {
            const response = await fetch(`/api/deezerProxy?q=${query}`);
            console.log('Response:', response);
            const data = await response.json();
            setResults(data.data);
            navigate("/results")
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Failed to fetch search result');
        }
    };

    const renderHomePage = () => { navigate("/home"); };
    
    
    return (
        <header className="header">
            <div className="logo" onClick={renderHomePage}>Deezer</div>
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