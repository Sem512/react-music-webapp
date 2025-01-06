import React from 'react'
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function GenreCom({name, playlistId,onTrackSelect}){
    const [tracks, setTracks] = useState([]);

   

    useEffect(() => {
        async function fetchPlaylist() {
            try {
                const response = await fetch(`/api/playlist/${playlistId}`);
                const data = await response.json();
                if (data.tracks && data.tracks.data) {
                    setTracks(data.tracks.data);
                } else {
                    console.error('No tracks found in the playlist');
                    console.log(data);
                }
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        }

        fetchPlaylist();
    }, []);
    return (
            <div className='container swiper'>
                <h2 className='genre-name'>{name}</h2>
                <Swiper className='horizontal-card'
                spaceBetween={30}
                slidesPerView={6}
                loop
                >
                    {tracks.map((track, index) => (
                    <SwiperSlide key={index}>
                    <Card result={track} onTrackSelect={onTrackSelect}/>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>

    )
}