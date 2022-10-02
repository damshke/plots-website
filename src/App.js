
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navibar } from './components/Navibar';
import {News} from './pages/NewsPage.js'
import {Music} from './pages/MusicPage.js'
import {Clip} from './pages/ClipPage.js'
import {Photos} from './pages/PhotoPage.js'
import {Poster} from './pages/PosterPage.js'
import {Contacts} from './pages/ContactPage.js'
import { Slider } from './components/Slider.js'
import { Routes, Route} from 'react-router-dom'
import {Footer} from './components/Footer.js'
function App() {
  return (
    <>
    <Navibar />
    <Slider />
    <Routes>
      <Route path="/" element={<News/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/music" element={<Music/>} />
      <Route path="/clips" element={<Clip/>} />
      <Route path="/photos" element={<Photos/>} />
      <Route path="/poster" element={<Poster/>} />
      <Route path="/contacts" element={<Contacts/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
