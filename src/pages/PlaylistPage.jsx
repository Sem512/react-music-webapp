import React, { useState } from 'react';
import plp from '../images/plp.jpg'
import '../index.css'

export default function PlaylistPage(){
    return(
        <div className='playlist-page'>
            <h1>Playlist Page</h1>
            <img src={plp} />
        </div>
    )
};