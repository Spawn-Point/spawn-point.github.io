import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footerPage">
      <div className="social">
        <ul>
          <li>
            <Link
              to="https://www.youtube.com/channel/UCUVlPhTLG6046c23rjF3J7A"
              target="_blank"
            >
              <i className="fab fa-youtube fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/SpawnPoint9000" target="_blank">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link to="https://discord.com/invite/HkxsurrRSb" target="_blank">
              <i className="fab fa-discord fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/spawnpoint9000/"
              target="_blank"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link to="https://spawnpoint.itch.io/" target="_blank">
              <i className="fa-brands fa-itch-io fa-2x"></i>
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <p>Email: info@spawnpoint.pt</p>
    </div>
  );
}
export default Footer;
