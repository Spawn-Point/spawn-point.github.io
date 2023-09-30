import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projectsPage">
      <h1>Projects</h1>
      <br />
      <h3>Press the images to learn more</h3>
      <div className="projects-list">
        <Link>
          <img
            src="/images/press.png"
            alt="hooking-season"
            className="projects-img"
          />
        </Link>
        <Link>
          <img
            src="/images/factory.png"
            alt="what-factory"
            className="projects-img"
          />
        </Link>
        <Link>
          <img src="/images/press.png" alt="reboop" className="projects-img" />
        </Link>
        <Link>
          <img
            src="/images/press.png"
            alt="jack-manor"
            className="projects-img"
          />
        </Link>
      </div>
    </div>
  );
}
export default Projects;
