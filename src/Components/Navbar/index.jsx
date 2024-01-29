import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div>
      <div className={`navbar bg-dark navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <ul>
            <li>
              <div className="logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <img src="/images/logo.png" alt="logo" />
                </Link>
              </div>
            </li>
            <li className='gap'>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
