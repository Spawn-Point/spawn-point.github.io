import { Link } from 'react-router-dom';
function JackProject() {
  return (
    <div className="jack-project-page page">
      <section className="jack-showcase">
        <h1>Jack O'Manor</h1>
      </section>
      <section className="carousel bg-dark">
        <Link to="/images/jack1.png" target="_blank">
          <img src="/images/jack1.png" alt="jack1" />
        </Link>
        <Link to="/images/jack2.png" target="_blank">
          <img src="/images/jack2.png" alt="jack2" />
        </Link>
        <Link to="/images/jack3.png" target="_blank">
          <img src="/images/jack3.png" alt="jack3" />
        </Link>
        <Link to="/images/jack4.png" target="_blank">
          <img src="/images/jack4.png" alt="jack4" />
        </Link>
        <Link to="/images/jack5.png" target="_blank">
          <img src="/images/jack5.png" alt="jack5" />
        </Link>
        <Link to="/images/jack6.png" target="_blank">
          <img src="/images/jack6.png" alt="jack6" />
        </Link>
        <Link to="/images/jack7.png" target="_blank">
          <img src="/images/jack7.png" alt="jack7" />
        </Link>
        <Link to="/images/jack8.png" target="_blank">
          <img src="/images/jack8.png" alt="jack8" />
        </Link>
        <Link to="/images/jack9.png" target="_blank">
          <img src="/images/jack9.png" alt="jack9" />
        </Link>
        <Link to="/images/jack10.png" target="_blank">
          <img src="/images/jack10.png" alt="jack10" />
        </Link>
      </section>
      <div>
        <section className="section-content">
          <div className="monsters-info">
            <h1>The Game</h1>
            <p>
              Play as Jack, a supernatural bounty hunter hired to rid a Spooky
              mansion of its ghostly possession, in this fun RogueLike top down
              game.
            </p>
          </div>
          <img className="jack-img" src="/images/jack.png" alt="jack" />
        </section>
        <section className="monsters-content bg-dark">
          <img src="/images/Sword_Knight_Walk.gif" alt="" width={'30%'} />
          <div className="monsters-info">
            <h1>Monsters</h1>
            <p>
              When the mansion was invaded by the supernatural several of its
              items came to live with an undying will to defend the house, such
              as paintings, stools, many suits of armor, ..... wait does this
              mean there were already skeletons in the house? Guys?
            </p>
          </div>
          <img src="/images/BenchWalkLeftt.gif" alt="" width={'25%'} />
        </section>
      </div>
      <section className="mansion">
        <h1>The Mansion</h1>
        <div className="mansion-content">
          <img src="/images/painting.gif" alt="" width={'40%'} />
          <p>
            Explore an ever changing mansion with a different layout each time,
            explore the ruins as you battle your way to the source of this
            haunting. In the way you might find items capable of helping you on
            your journey but you will definitely find danger behind every door.
          </p>
        </div>
      </section>
      <section className="mansion-content play-section">
        <div className="play-info bg-dark">
          <h1>Play in browser on Itch.io</h1>
          <Link to="https://spawnpoint.itch.io/jack-omanor" target="_blank">
            <i className="fa-brands fa-itch-io fa-6x"></i>
          </Link>
        </div>
        <img src="/images/pumpkin.gif" alt="pumpkin" width={'35%'} />
      </section>
    </div>
  );
}
export default JackProject;
