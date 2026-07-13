import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//BrowserRouter, Routes, Route,

import AmplifyApps from './components/AmplifyApps/AmplifyApps'
import Gallery from './pages/Gallery.tsx'

import './App.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AmplifyApps />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
