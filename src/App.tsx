import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//BrowserRouter, Routes, Route,

import AmplifyApps from './components/AmplifyApps/AmplifyApps'
import Gallery from './pages/Gallery.tsx'
import FontsPage from "./pages/Fonts.tsx";
import FontPairsPage from "./pages/FontPairs.tsx";
import FontPairsDemoPage from "./pages/FontPairsDemo.tsx";
import FontPairsPageDemo from "./pages/FontPairsPageDemo.tsx";

import './App.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AmplifyApps />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/fonts" element={<FontsPage  />} />
          <Route path="/fontpairs" element={<FontPairsPage  />} />
          <Route path="/fontpairsdemo" element={<FontPairsDemoPage />} />
          <Route path="/fontpairspagedemo" element={<FontPairsPageDemo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
