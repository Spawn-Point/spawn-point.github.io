import { Link } from 'react-router-dom';

function Press() {
  return (
    <div className="pressPage bg-dark page">
      <h1>Press Kits</h1>
      <br />
      <Link to="/hooking-season-press-kit">
        <img src="/images/Banner_Logo.png" alt="press-img" />
      </Link>
    </div>
  );
}
export default Press;
