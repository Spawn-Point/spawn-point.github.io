import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/AboutPage';
import Contacts from './Pages/ContactsPage';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Press from './Pages/Press';
import CurrentProject from './Pages/CurrentProject';
import HSPressKit from './Pages/HSPressKit';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/press" element={<Press />} />
        <Route path="/currentProject" element={<CurrentProject />} />
        <Route path="/hooking-season-press-kit" element={<HSPressKit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
