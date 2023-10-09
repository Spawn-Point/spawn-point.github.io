import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="navbar bg-dark">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="nav-content">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/hookingSeason">Current Project</Link>
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
