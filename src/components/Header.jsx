import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Header({ setResults, setQuery, query, currentQuery, setCurrentQuery }) {
    const navigate = useNavigate(); // Hook for navigating between routes

    const handleSearch = async () => {
        try {
            // Fetch search results from the AWS Lambda API
            const response = await fetch(`https://83g2xxt654.execute-api.us-east-1.amazonaws.com/default/search?q=${query}`);
            const data = await response.json();

            // Update results and set the current query
            setResults(data.data);
            setCurrentQuery(query);
        } catch (error) {
            // Handle errors by navigating to the error page
            console.error('Error fetching data:', error);
            navigate("/error");
        }
    };

    // Function to navigate to the home page
    const renderHomePage = () => {
        navigate("/home");
    };

    return (
        <header className="header">
            {/* Logo that redirects to the home page on click */}
            <div className="logo" onClick={renderHomePage}>
                <span>B</span>eat<span>B</span>lend
            </div>

            {/* Search bar container */}
            <div className="search-container">
                <input 
                    type="text" 
                    name="search" 
                    id="searchbar" 
                    placeholder="What song do you want to play?" 
                    className="search-input"
                    value={query} // Controlled input value
                    onChange={(e) => setQuery(e.target.value)} // Update query state on input change
                    onKeyDown={(e) => e.key === "Enter" ? handleSearch() : setQuery(e.target.value)} // Trigger search on Enter key
                />
                <button onClick={handleSearch} className="search-button">
                    <i className="fi fi-rs-search"></i>
                </button>
            </div>
        </header>
    );
}

export default Header;
