import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="nav-content">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/currentProject">Current Project</Link>
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
        <div className="social-media">
          <ul>
            <li>
              <Link
                to="https://www.youtube.com/channel/UCUVlPhTLG6046c23rjF3J7A"
                target="_blank"
              >
                <img src="/images/youtube.png" alt="youtube" />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/SpawnPoint9000" target="_blank">
                <img src="/images/twitter.png" alt="twitter" />
              </Link>
            </li>
            <li>
              <Link to="https://discord.com/invite/HkxsurrRSb" target="_blank">
                <img src="/images/discord.png" alt="discord" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/spawnpoint9000/"
                target="_blank"
              >
                <img src="/images/insta.png" alt="instagram" />
              </Link>
            </li>
            <li>
              <Link to="https://spawnpoint.itch.io/" target="_blank">
                <img src="/images/itch.png" alt="itch" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
