import React from 'react'

export default function ListCard({num, image, title, artist, album, duration, setCount}){
    return (
        <div className='list-card'>
            <span>{num}</span>
            <img src={image} />
            <h3>{title}</h3>
            <h3>{artist}</h3>
            <h3>{album}</h3>
            <h3>{duration}</h3>
        </div>
    )
}
