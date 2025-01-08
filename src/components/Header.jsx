import React, { useState } from 'react';


import { useNavigate } from "react-router-dom";


function Header({setResults}) {
    const [query, setQuery] = useState('');

    const navigate = useNavigate();

    const handleSearch = async () => {

        try {
            const response = await fetch(`/api/search?q=${query}`);
            const data = await response.json();
            setResults(data.data);
            navigate("/results")
        } catch (error) {
            console.log(error)
            console.error('Error fetching data:', error);
            alert('Failed to fetch search result');
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