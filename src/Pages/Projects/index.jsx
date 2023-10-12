import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projectsPage bg-dark page">
      <div>
        <h1>Projects</h1>
        <br />
        <h3>Press the images to learn more</h3>
      </div>
      <div className="projects-list">
        <Link to="/hookingSeason">
          <img
            src="/images/Banner_Logo.png"
            alt="hooking-season"
            className="projects-img"
          />
        </Link>
        <Link to="/wtfProject">
          <img src="/images/factory.png" alt="wtf" className="projects-img" />
        </Link>
        <Link to="/reboopProject">
          <img
            src="/images/reboop-logo.png"
            alt="reboop"
            className="projects-img"
          />
        </Link>
        <Link to="/jackProject">
          <img
            src="/images/jack-logo.png"
            alt="jack-manor"
            className="projects-img"
          />
        </Link>
      </div>
    </div>
  );
}
export default Projects;
