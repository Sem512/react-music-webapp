import React, { useState } from 'react';
import Header from './components/Header';
import PreviewPage from './components/PreviewPage';
import Tracker from './components/Tracker';
import Navbar from './components/Nav';

import GenrePage from './pages/GenrePage'
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import PlaylistPage from './pages/PlaylistPage';
import { Route, Routes } from 'react-router-dom'

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
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/genres" element={<GenrePage onTrackSelect={handleTrackSelect} />}/>
                    <Route path="/results" element={<PreviewPage results={results} onTrackSelect={handleTrackSelect} /> } />
                    <Route path="/favorites" element={<FavoritesPage />}/>
                    <Route path="/playlists" element={<PlaylistPage />}/>
                </Routes>

            </main>
            <Tracker track={currentTrack} />
        </div>
    );
}

export default App;