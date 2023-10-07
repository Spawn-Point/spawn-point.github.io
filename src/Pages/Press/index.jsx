import { Link } from 'react-router-dom';

function Press() {
  return (
    <div className="pressPage">
      <h1>Press Kits</h1>
      <Link to="/hooking-season-press-kit">
        <img src="/images/Banner_Logo.png" alt="press-img" />
      </Link>
    </div>
  );
}
export default Press;
