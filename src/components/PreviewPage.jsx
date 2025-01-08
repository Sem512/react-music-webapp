import React, { useState } from 'react';
import Card from './Card'

function PreviewPage({ results, onTrackSelect, setFavList,favList }) {
    return (
        <div className="preview-page">
            {results && results.length > 0 ? (
                <div className="track-list">
                    {results.map((result, index) => (
                        <Card 
                            key={index}
                            result={result}
                            onTrackSelect={onTrackSelect}
                            setFavList={setFavList}
                            favList={favList}
                        />
                    ))}
                </div>
            ) : (
                <p className="no-results">No results found. Try searching for a different song!</p>
            )}
        </div>
    );
}

export default PreviewPage;