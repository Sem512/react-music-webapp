import React, { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';

export default function HomePage(){
    const [songs, setSongs] = useState([])
    const [count, setCount] = useState(0)

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
            <h1>Popular hits</h1>
            {songs.map((item, index) =>  (<ListCard 
                    num={index+1}
                    key={item.id}
                    image={item.album.cover_small}
                    title={item.title_short}
                    artist={item.artist.name}
                    album={item.album.title}
                    duration={item.duration}
                    setCount={setCount}
                        />
                    ) 
                        )}

        </div>

    )
};
