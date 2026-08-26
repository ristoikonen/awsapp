import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//BrowserRouter, Routes, Route,

import AmplifyApps from './components/AmplifyApps/AmplifyApps'
import Gallery from './pages/Gallery.tsx'
import FontsPage from "./pages/Fonts.tsx";
import FontPairsPage from "./pages/FontPairs.tsx";
import FontPairsDemoPage from "./pages/FontPairsDemo.tsx";
import FontPairsPageDemo from "./pages/FontPairsPageDemo.tsx";
import FontPlay from "./pages/FontPlay.tsx";
import Users from "./pages/Users.tsx";
//import FontPairsHTMLPage from "./pages/FontPairsTester.html"; <Route path="/fontpairshtmlpage" element={<FontPairsHTMLPage />} />

import './App.css'
//import {  type UsersProps } from './data/userData';
//const up:UsersProps;

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
          <Route path="/fontplay" element={<FontPlay />} />
          <Route path="/users" element={<Users users={[]} onEdit={() => {}} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
