import {  Link } from 'react-router-dom';
//BrowserRouter, Routes, Route,

import AmplifyApps from './components/AmplifyApps/AmplifyApps'
import Gallery from './pages/Gallery.tsx'

import './App.css'

function App() {


  return (
    <>

        <AmplifyApps/>

        <Link to="/gallery" style={{ color: 'blue', textDecoration: 'underline' }}>
          <Gallery/>
        </Link>
    </>
  )
}

export default App
