import React from 'react'

export default function Card({index, result, onTrackSelect}){
    return(
        <div key={index} className="track-card">
            <img src={result.album.cover} alt={result.title} className="album-cover" />
            <h3 className="track-title">{result.title}</h3>
            <p className="artist-name">{result.artist.name}</p>
            <div className="play-icon" onClick={() => onTrackSelect(result)}>
                <i className="fi fi-rr-play-circle"></i>
            </div>
        </div>
    )
}

