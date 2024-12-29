import React from 'react';

function PreviewPage({ results }) {
    return (
        <div className="preview-page">
            {results && results.length > 0 ? (
                <div className="track-list">
                    {results.map((result, index) => (
                        <div key={index} className="track-card">
                            <img src={result.album.cover} alt={result.title} className="album-cover" />
                            <h3 className="track-title">{result.title}</h3>
                            <p className="artist-name">{result.artist.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-results">No results found. Try searching for a different song!</p>
            )}
        </div>
    );
}

export default PreviewPage;