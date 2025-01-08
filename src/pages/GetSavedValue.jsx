import React, { useEffect, useState } from 'react';
import '../index.css'

function getSavedValue(key, initialValue){
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue
    
    return initialValue
};

export default function useLocalStorage(key, initialValue){
    const [value, setValue] = useState( () => { 
        return getSavedValue(key, initialValue)}
    )

    return(
        [value, setValue]
    )
}
