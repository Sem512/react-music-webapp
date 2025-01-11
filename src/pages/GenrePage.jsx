import React, { useState, useEffect } from 'react';
import 'swiper/css/bundle';

import GenreCom from '../components/GenreCom';

export default function GenrePage({onTrackSelect,setFavList,favList}) {
    const dictId = {
        'Hip-Hop': 1996494362,
        'Afrobeats': 3153080842,
        'Pop': 1282483245,
        'Rock': 13238299403,
        'K-Pop': 4096400722,
        'Dance': 706093725
    }
    const genres = ['Hip-Hop','Afrobeats','Pop','Rock','K-Pop','Dance']



    return (
        <div className='genres-page'>
            <h1>Genres</h1>
            {genres.map((item => <GenreCom 
                                    key={item}
                                    name={item}
                                    playlistId={dictId[item]}
                                    onTrackSelect={onTrackSelect}
                                    setFavList={setFavList}
                                    favList={favList}
                                />
            ))}
        </div>
    );
}
