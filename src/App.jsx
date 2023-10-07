import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/AboutPage';
import Contacts from './Pages/ContactsPage';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Press from './Pages/Press';
import HookingSeason from './Pages/HookingSeason';
import WhatTheFactoryProject from './Pages/WhatTheFactoryProject';
import ReboopProject from './Pages/ReboopProject';
import JackProject from './Pages/JackProject';
import HSPressKit from './Pages/HSPressKit';
import Projects from './Pages/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/press" element={<Press />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hookingSeason" element={<HookingSeason />} />
        <Route path="/wtfProject" element={<WhatTheFactoryProject />} />
        <Route path="/reboopProject" element={<ReboopProject />} />
        <Route path="/jackProject" element={<JackProject />} />
        <Route path="/hooking-season-press-kit" element={<HSPressKit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
