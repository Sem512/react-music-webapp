import React, { useState } from 'react';
import Card from './Card'; 


function PreviewPage({ results, onTrackSelect, setFavList, favList }) {
    return (
        <div className="preview-page">
            {/* Conditional rendering: Check if there are results to display */}
            {results && results.length > 0 ? (
                <div className="track-list">
                    {/* Map through the results and render a Card for each track */}
                    {results.map((result, index) => (
                        <Card 
                            key={index} // Unique key for each Card component
                            result={result} 
                            onTrackSelect={onTrackSelect} 
                            setFavList={setFavList} 
                            favList={favList} 
                        />
                    ))}
                </div>
            ) : (
                // Display a message if no results are found
                <p className="no-results">No results found. Try searching for a different song!</p>
            )}
        </div>
    );
}

export default PreviewPage;
