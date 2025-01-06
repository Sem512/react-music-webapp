import React, { useState, useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import GenreCom from '../components/GenreCom';

export default function GenrePage({onTrackSelect }) {

    
    const playlistId = '1282483245'; // Deezer playlist ID
    const dictId = {
        'rock': 13238299403,
        'pop': 1282483245,
        'rap': 1996494362,
        'k-pop': 4096400722,
        'afrobeats': 3153080842,
        'dance': 706093725
    }
    const genres = ['rock','pop','rap','k-pop','afrobeats','dance']



    return (
        <div className='genres-page'>
            <h1>Genre Page</h1>
            {genres.map((item => <GenreCom 
                                    key={item}
                                    name={item}
                                    playlistId={dictId[item]}
                                    onTrackSelect={onTrackSelect}
                                />
            ))}
        </div>
    );
}
