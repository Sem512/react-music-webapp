import React, { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';
import '../index.css'

export default function HomePage({onTrackSelect}){
    const [songs, setSongs] = useState([])


    useEffect(() => {
        async function getData(){
            const response = await fetch("https://83g2xxt654.execute-api.us-east-1.amazonaws.com/default/playlist?playlistId=2098157264")
            
            const data = await response.json();
            if (data.tracks && data.tracks.data) {
                setSongs(data.tracks.data);
            } else {
                console.error('No tracks found in the playlist');
                console.log(data);
            }
            
        }
        getData();
     }, []);
    

    return(
        <div className='home-page'>
            <h1>Popular Right Now!</h1>
            {songs.map((result, index) =>  (<ListCard 
                    num={index+1}
                    key={result.id}
                    image={result.album.cover_small}
                    title={result.title_short}
                    artist={result.artist.name}
                    album={result.album.title}
                    duration={result.duration}
                    onTrackSelect={onTrackSelect}
                    result={result}
                        />
                    ) 
                        )}

        </div>

    )
};
