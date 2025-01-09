import React from 'react'
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSessionStorage from '../pages/GetSessionValue';
import 'swiper/css';

export default function GenreCom({name, playlistId,onTrackSelect,setFavList,favList}){
    const [tracks, setTracks] = useState([]);
    const [data, setData] = useSessionStorage(`${name}-genre`, '')

        // session storage for genre page
        useEffect(() => {
            async function getData(){
                try{
                    let apiData = ''
                    if (data===''){
                        const response = await fetch(`https://83g2xxt654.execute-api.us-east-1.amazonaws.com/default/playlist?playlistId=${playlistId}`);
                        apiData = await response.json();
                        sessionStorage.setItem(`${name}-genre`,JSON.stringify(apiData))
                        setData(apiData)
                    }
                    if (!apiData){apiData = data}
        
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
         }, []);
   

    // useEffect(() => {
    //     async function fetchPlaylist() {
    //         try {
    //             const response = await fetch(`/api/playlist/${playlistId}`);
    //             const data = await response.json();
    //             if (data.tracks && data.tracks.data) {
    //                 setTracks(data.tracks.data);
    //             } else {
    //                 console.error('No tracks found in the playlist');
    //                 console.log(data);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching playlist:', error);
    //         }
    //     }

    //     fetchPlaylist();
    // }, []);
    return (
            <div className='container'>
                <h2 className='genre-name'>{name}</h2>
                <Swiper className='horizontal-card'
                spaceBetween={0}
                slidesPerView={6}
                >
                    {tracks.map((track, index) => (
                    <SwiperSlide key={index}>
                    <Card result={track} onTrackSelect={onTrackSelect} setFavList={setFavList} favList={favList}/>
                    </SwiperSlide>
                ))}
                </Swiper>
                <hr className="genre-divider"/>
            </div>

    )
}
