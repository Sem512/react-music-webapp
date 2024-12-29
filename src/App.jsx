import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Nav.jsx'
import PreviewPage from './components/PreviewPage.jsx'
import Tracker from './components/Tracker.jsx'

function App() {
  const [results, setResults] = useState([]);
  return (
    <div>
      <Header setResults={setResults} />
            <main>
                <Navbar />
                <PreviewPage results={results} />
            </main>
    <Tracker/>
    </div>
  )
}

export default App
