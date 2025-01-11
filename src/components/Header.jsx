import React, { useState } from 'react';


import { useNavigate } from "react-router-dom";


function Header({setResults,setQuery,query,currentQuery,setCurrentQuery}) {
    const navigate = useNavigate();

    const handleSearch = async () => {

        try {
            const response = await fetch(`https://83g2xxt654.execute-api.us-east-1.amazonaws.com/default/search?q=${query}`);
            const data = await response.json();
            setResults(data.data);
            setCurrentQuery(query);
        } catch (error) {
            console.error('Error fetching data:', error);
            navigate("/error");
        }
    };

    const renderHomePage = () => { navigate("/home"); };
    
    
    return (
        <header className="header">
            <div className="logo" onClick={renderHomePage}><span>B</span>eat<span>B</span>lend</div>
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