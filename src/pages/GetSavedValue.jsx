import React, { useEffect, useState } from 'react';
import '../index.css';

/**
 * Helper function to retrieve a saved value from localStorage or return the initial value.
 *  key - The key for the localStorage item.
 * initialValue - The initial value to use if no saved value exists.
 */

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;

    // If the initial value is a function, execute it to get the value.
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}


export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    // Return the stateful value and the function to update it.
    return [value, setValue];
}
