import { Link } from 'react-router-dom';
function JackProject() {
  return (
    <div className="jackProject-page">
      <section className="jack-showcase">
        <h1>Jack O'Manor</h1>
      </section>
      <section className="carousel bg-dark">
        <img src="/images/jack1.png" alt="jack1" />
        <img src="/images/jack2.png" alt="jack2" />
        <img src="/images/jack3.png" alt="jack3" />
        <img src="/images/jack4.png" alt="jack4" />
        <img src="/images/jack5.png" alt="jack5" />
        <img src="/images/jack6.png" alt="jack6" />
        <img src="/images/jack7.png" alt="jack7" />
        <img src="/images/jack8.png" alt="jack8" />
        <img src="/images/jack9.png" alt="jack9" />
        <img src="/images/jack10.png" alt="jack10" />
      </section>
      <div>
        <section className="section-content">
          <div className="section-info">
            <h1>The Game</h1>
            <p>
              Play as Jack, a supernatural bounty hunter hired to rid a Spooky
              mansion of its ghostly possession, in this fun RogueLike top down
              game.
            </p>
          </div>
          <img src="/images/jack.png" alt="jack" width={'340px'} />
        </section>
        <section className="section-content bg-dark">
          <img src="/images/monster1.gif" alt="" width={'500px'} />
          <div className="section-info">
            <h1>Monsters</h1>
            <p>
              When the mansion was invaded by the supernatural several of its
              items came to live with an undying will to defend the house, such
              as paintings, stools, many suits of armor, ..... wait does this
              mean there were already skeletons in the house? Guys?
            </p>
          </div>
          <img src="/images/monster2.gif" alt="" width={'265px'} />
        </section>
      </div>
      <section>
        <h1>The Mansion</h1>
        <div className="mansion">
          <img src="/images/the-mansion.gif" alt="" />
          <p>
            Explore an ever changing mansion with a different layout each time,
            explore the ruins as you battle your way to the source of this
            haunting. In the way you might find items capable of helping you on
            your journey but you will definitely find danger behind every door.
          </p>
        </div>
      </section>
      <section className="play">
        <div className="play-info bg-dark">
          <h1>Play in browser on Itch.io</h1>
          <Link to="https://spawnpoint.itch.io/jack-omanor" target="_blank">
            <i className="fa-brands fa-itch-io fa-6x"></i>
          </Link>
        </div>
        <img src="/images/pumpkin.gif" alt="pumpkin" width={'600px'} />
      </section>
    </div>
  );
}
export default JackProject;
