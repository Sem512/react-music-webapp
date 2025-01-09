import {React,useState} from 'react'

export default function ListCard({ num, image, result, title, artist, album, duration, onTrackSelect }) {
    return (
        <div className="list-card">
            <span>{num}</span>
            <div className="image-container">
                <img src={image} alt={`${title} album cover`} className="album-image" />
                <div className="play-icon-small" onClick={() => onTrackSelect(result)}>
                    <i className="fi fi-rr-play-circle"></i>
                </div>
            </div>
            <h3>{title}</h3>
            <h3>{artist}</h3>
            <h3>{album}</h3>
            <h3>
                {`${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, '0')}`}
            </h3>
        </div>
    );
}
