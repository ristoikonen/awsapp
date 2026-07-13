import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//BrowserRouter, Routes, Route,

import AmplifyApps from './components/AmplifyApps/AmplifyApps'
import Gallery from './pages/Gallery.tsx'

import './App.css'

function App() {


  return (
    <>

        {/* <AmplifyApps/> */}

    <Router>
      <Routes>
        <Route path="/" element={<AmplifyApps />} />
        
        {/* 1. Define the path for your Gallery component */}
        <Route path="/gallery" element={<Gallery />} />
        
      </Routes>
    </Router>

    </>
  )
}

export default App
