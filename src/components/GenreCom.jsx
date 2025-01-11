import React from 'react';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSessionStorage from '../pages/GetSessionValue';
import 'swiper/css';

export default function GenreCom({ name, playlistId, onTrackSelect, setFavList, favList }) {
    const [tracks, setTracks] = useState([]); // State for storing track data
    const [data, setData] = useSessionStorage(`${name}-genre`, ''); // Session storage hook for caching data

    // Fetch playlist data and manage session storage
    useEffect(() => {
        async function getData() {
            try {
                let apiData = '';
                if (data === '') {
                    // Fetch data from API if not available in session storage
                    const response = await fetch(`https://83g2xxt654.execute-api.us-east-1.amazonaws.com/default/playlist?playlistId=${playlistId}`);
                    apiData = await response.json();
                    sessionStorage.setItem(`${name}-genre`, JSON.stringify(apiData));
                    setData(apiData);
                }
                if (!apiData) {
                    apiData = data;
                }

                if (apiData.tracks && apiData.tracks.data) {
                    setTracks(apiData.tracks.data);
                } else {
                    console.error('No tracks found in the playlist');
                    console.log(apiData);
                }
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        }
        getData();
    }, []); // Dependency array ensures this runs on mount

    return (
        <div className='container'>
            <h2 className='genre-name'>{name}</h2>
            <Swiper
                className='horizontal-card'
                spaceBetween={0}
                slidesPerView={6}
            >
                {tracks.map((track, index) => (
                    <SwiperSlide key={index}>
                        <Card 
                            result={track} 
                            onTrackSelect={onTrackSelect} 
                            setFavList={setFavList} 
                            favList={favList} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <hr className="genre-divider" />
        </div>
    );
}
