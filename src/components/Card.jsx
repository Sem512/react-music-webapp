import React from "react";

export default function Card({ index, result, onTrackSelect, setFavList, favList }) {
    const isFavorited = favList.some((item) => item.id === result.id); // Check if track is a favorite

    function handleFavClick() {
        const newTrack = result;
        setFavList((prev) => {
            if (prev.some((item) => item.id === newTrack.id)) {
                return prev.filter((item) => item.id !== newTrack.id);
            } else {
                return [...prev, newTrack];
            }
        });
    }

    return (
        <div key={index} className="track-card">
            <img
                src={result.album.cover_medium}
                alt={result.title}
                className="album-cover"
            />
            <h3 className="track-title">{result.title}</h3>
            <p className="artist-name">{result.artist.name}</p>
            <div className="play-icon" onClick={() => onTrackSelect(result)}>
                <i className="fi fi-rr-play-circle"></i>
            </div>
            <button className="fav-button" onClick={handleFavClick}>
                <i
                    className="fi fi-ss-star"
                    style={{ color: isFavorited ? "gold" : "gray" }}
                ></i>
            </button>
        </div>
    );
}
