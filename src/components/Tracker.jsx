import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';

function Tracker({ track }) {
    const [Playing, setPlaying] = useState(false);
    const [currentSound, setCurrentSound] = useState(null);

    const togglePlayPause = () => {
        if (currentSound) {
            if (Playing) {
                currentSound.pause();
            } else {
                currentSound.play();
            }
            setPlaying(!Playing);
        }
    };
    
    let title,artist,album;

    useEffect(() => {
        if (track && track.preview) {
            if (currentSound) {
                currentSound.stop();
            }
            const sound = new Howl({
                src: [track.preview],
                html5: true,
            });
            sound.play();
            setCurrentSound(sound);
            setPlaying(true);
        }
        return () => {
            if (currentSound) {
                currentSound.stop();
                setCurrentSound(null);
            }
        };
    }, [track]);

    const buttons = [
        { icon: "fi fi-rr-shuffle", action: "Shuffle" },
        { icon: "fi fi-rr-rewind", action: "Rewind" },
        { icon: Playing ? "fi fi-rr-pause-circle" : "fi fi-rr-play-circle", action: "Play/Pause", onClick: togglePlayPause },
        { icon: "fi fi-rr-forward", action: "Forward" },
        { icon: "fi fi-rr-endless-loop", action: "Loop" },
    ];

    if (!track) {
        title="Track Title";
        artist="Artist Name";
        album="";
    }
    else{
        title=track.title;
        artist=track.artist.name;
        album=track.album.cover
    }

 
    return (
        <section className="tracker">
            <div className="current-track">
                <img src={album} alt="Album cover" className="album-cover" />
                <div>
                    <h3 className="track-title">{title}</h3>
                    <p className="artist-name">{artist}</p>
                </div>
            </div>
            <div className="play-con">
                <div className="playback-control">
                    {buttons.map((btn, index) => (
                        <button key={index} aria-label={btn.action} onClick={btn.onClick || null}>
                            <i className={btn.icon}></i>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Tracker;
