import { Link } from 'react-router-dom';

function Press() {
  return (
    <div className="pressPage">
      <h1>Press Kits</h1>
      <Link to="/hooking-season-press-kit">
        <img src="/images/press.png" alt="press-img" />
      </Link>
    </div>
  );
}
export default Press;
