import { Link } from 'react-router-dom';
function JackProject() {
  return (
    <div className="jackProject-page">
      <div className="jack-intro">
        <h1>Jack O'Manor</h1>
      </div>
      <div className="jack-carousel">
        <img src="/images/.png" alt="" />
        <img src="/images/.png" alt="" />
        <img src="/images/.png" alt="" />
        <img src="/images/.png" alt="" />
        <img src="/images/.png" alt="" />
        <img src="/images/.png" alt="" />
        <img src="/images/.png" alt="" />
        <img src="/images/.png" alt="" />
        <img src="/images/.png" alt="" />
      </div>
      <div className="the-game">
        <div className="game-info">
          <h1>The Game</h1>
          <p>
            Play as Jack, a supernatural bounty hunter hired to rid a Spooky
            mansion of its ghostly possession, in this fun RogueLike top down
            game.
          </p>
        </div>
        <div className="game-img">
          <img src="/images/jack.png" alt="" width={'397px'} />
        </div>
        <div className="monsters">
          <img src="/images/monster1.gif" alt="" width={'544px'} />
          <div className="game-info">
            <h1>Monsters</h1>
            <p>
              When the mansion was invaded by the supernatural several of its
              items came to live with an undying will to defend the house, such
              as paintings, stools, many suits of armor, ..... wait does this
              mean there were already skeletons in the house? Guys?
            </p>
          </div>
          <img src="/images/monster2.gif" alt="" width={'265px'} />
        </div>
      </div>
      <div>
        <h1>The Mansion</h1>
        <div className="mansion">
          <img src="/images/the-mansion.png" alt="" />
          <p>
            Explore an ever changing mansion with a different layout each time,
            explore the ruins as you battle your way to the source of this
            haunting. In the way you might find items capable of helping you on
            your journey but you will definitely find danger behind every door.
          </p>
        </div>
      </div>
      <div className="play">
        <div>
          <h1>Play in browser on Itch.io</h1>
          <Link to="https://spawnpoint.itch.io/jack-omanor" target="_blank">
            <i className="fa-brands fa-itch-io fa-6x"></i>
          </Link>
        </div>
        <img src="/images/pumpkin.gif" alt="pumpkin" width={'600px'} />
      </div>
    </div>
  );
}
export default JackProject;
