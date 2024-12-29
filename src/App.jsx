import React, { useState } from 'react';
import Header from './components/Header';
import PreviewPage from './components/PreviewPage';
import Tracker from './components/Tracker';
import Navbar from './components/Nav';

function App() {
    const [results, setResults] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);

    const handleTrackSelect = (track) => {
      setCurrentTrack(track);
  };

    return (
        <div>
            <Header setResults={setResults} />
            <main>
                <Navbar/>
                <PreviewPage results={results} onTrackSelect={handleTrackSelect} /> 
            </main>
            <Tracker track={currentTrack} />
        </div>
    );
}

export default App;