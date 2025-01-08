import React, { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';
import '../index.css'

export default function FavoritesPage({favList, onTrackSelect}){
    


    return(
        <div className='home-page'>
            <h1 className="favorites-page">Favorites</h1>

            {favList.map((result, index) => {
                return ( 
                    <ListCard 
                        num={index + 1}
                        key={result.id}
                        result={result}
                        image={result.album.cover_small}
                        title={result.title}
                        artist={result.artist.name}
                        album={result.album.title}
                        duration={result.duration}
                        onTrackSelect={onTrackSelect}
                    />
                );
            })}
        </div>
        
    )
};
