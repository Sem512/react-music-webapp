import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';

function Tracker({ track }) {
    const [Playing, setPlaying] = useState(false);
    const [currentSound, setCurrentSound] = useState(null);
    const [currentTime, setCurrentTime] = useState(0); // Track the current time
    const [duration, setDuration] = useState(0); // Track the track's duration
    const [progress, setProgress] = useState(0); // Update seeker bar progress
    const [volume, setVolume] = useState(0.1);

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

    const setIcon = () =>{
        if(!volume)
            return (<i className="fi fi-rr-volume-mute volume-icon"></i>)
        else
            return (<i className="fi fi-rr-volume volume-icon"></i>)
    };

    const handleSeekChange = (e) => {
        const value = e.target.value;  
        if (currentSound) {
            currentSound.seek((value / 100) * duration); // Seek to the new position
        }
        setProgress(value); // Update the progress bar value
    };

    useEffect(() => {
        if (track && track.preview) {
            if (currentSound) {
                currentSound.stop();
            }
            const sound = new Howl({

                src: [track.preview],
                html5: true,
                onplay: () => {
                    setDuration(sound.duration()); // Set the track's duration
                },
                onseek: () => {
                    setCurrentTime(sound.seek()); // Update current time during playback
                },
                onend: () => {
                    setPlaying(false);
                    setProgress(0); // Reset progress when track ends
                },
            });
            sound.play();
            setCurrentSound(sound);
            setPlaying(true);
            setVolume(0.1);
        }
        
        return () => {
            if (currentSound) {
                currentSound.stop();
                setCurrentSound(null);
            }
        };
    }, [track]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentSound) {
                const time = currentSound.seek();
                setCurrentTime(time);
                setProgress((time / duration) * 100); // Update progress as track plays
            }
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup interval when component unmounts
    }, [currentSound, duration]);

    useEffect(() => {
        if (currentSound) {
            currentSound.volume(volume);
        }
    
    }, [volume]);

    const buttons = [
        { icon: "fi fi-rr-shuffle", action: "Shuffle" },
        { icon: "fi fi-rr-rewind", action: "Rewind" },
        { icon: Playing ? "fi fi-rr-pause-circle" : "fi fi-rr-play-circle", action: "Play/Pause", onClick: togglePlayPause },
        { icon: "fi fi-rr-forward", action: "Forward" },
        { icon: "fi fi-rr-endless-loop", action: "Loop" },
    ];

    // Default track details if no track is provided
    let title, artist, album;
    if (!track) {
        title = "Track Title";
        artist = "Artist Name";
        album = "";
    } else {
        title = track.title;
        artist = track.artist.name;
        album = track.album.cover;
    }

    return (
        <section className="tracker">
            <div className="current-track">

                
                {!album? <i className="fi fi-ss-music-alt"></i> : <img src={album} alt="Album cover" className="album-cover" />}
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
                <div className="seek-bar">
                    <span>{`${Math.floor(currentTime / 60)}:${String(Math.floor(currentTime % 60)).padStart(2, '0')}`}</span>
                    <input
                        type="range"
                        id="seekerBar"
                        min="0"
                        max="100"
                        value={progress?progress:0}
                        step="1"
                        onChange={handleSeekChange}
                    />    
                    <span>{`${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, '0')}`}</span>
                </div>
                
            </div>
            <div className="volume-control">
                    <label htmlFor="volume">{setIcon()}</label>
                    <input
                        type="range"
                        id="volume"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onInput={(e) => setVolume(parseFloat(e.target.value))}
                    />
                </div>
        </section>
    );
}

export default Tracker;
