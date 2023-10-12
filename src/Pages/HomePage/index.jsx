import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homePage bg-dark page">
      <div className="hero">
        <img src="/images/white logo.png" alt="white-logo" />
      </div>
      <div className="latest-project">
        <Link to="hookingSeason">
          <img
            className="banner-top"
            src="/images/library_logo_transparent HD.png"
            alt="library_logo_transparent HD"
          />
        </Link>
        <img
          className="banner-back"
          src="/images/library_hero.png"
          alt="hs-banner"
        />
      </div>
      <div className="projects">
        <div>
          <h1>Projects</h1>
          <br />
          <h4>Press the images to learn more</h4>
        </div>
        <div className="projects-list">
          <Link to="/hookingSeason">
            <img src="/images/Banner_Logo.png" alt="hs" />
          </Link>
          <Link to="/wtfProject">
            <img src="/images/factory.png" alt="wtf" />
          </Link>
          <Link to="/reboopProject">
            <img src="/images/reboop-logo.png" alt="reboop" />
          </Link>
          <Link to="/jackProject">
            <img src="/images/jack-logo.png" alt="jack-manor" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
