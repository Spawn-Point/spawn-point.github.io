import { Link } from 'react-router-dom';

function ReboopProject() {
  return (
    <div className="reboop-page page">
      <section className="reboop-showcase">
        <h1>REBOOP</h1>
      </section>
      <section className="carousel bg-bourdou">
        <Link to="/images/reboop1.png" target="_blank">
          <img src="/images/reboop1.png" alt="reboop1" />
        </Link>
        <Link to="/images/reboop2.png" target="_blank">
          <img src="/images/reboop2.png" alt="reboop2" />
        </Link>
        <Link to="/images/reboop3.png" target="_blank">
          <img src="/images/reboop3.png" alt="reboop3" />
        </Link>
        <Link to="/images/reboop4.png" target="_blank">
          <img src="/images/reboop4.png" alt="reboop4" />
        </Link>
        <Link to="/images/reboop5.png" target="_blank">
          <img src="/images/reboop5.png" alt="reboop5" />
        </Link>
        <Link to="/images/reboop6.png" target="_blank">
          <img src="/images/reboop6.png" alt="reboop6" />
        </Link>
        <Link to="/images/reboop7.png" target="_blank">
          <img src="/images/reboop7.png" alt="reboop7" />
        </Link>
        <Link to="/images/reboop8.png" target="_blank">
          <img src="/images/reboop8.png" alt="reboop8" />
        </Link>
        <Link to="/images/reboop9.png" target="_blank">
          <img src="/images/reboop9.png" alt="reboop9" />
        </Link>
        <Link to="/images/reboop10.png" target="_blank">
          <img src="/images/reboop10.png" alt="reboop10" />
        </Link>
      </section>
      <div>
        <section className="section-content">
          <div className="section-info bg-bourdou">
            <h1>The Game</h1>
            <p>
              Back in the days Right before the plague of 2020 we participated
              in the global game jam. The theme was Repair, after a long
              brainStorming session we came up with the concept of a
              metroidvania starring a robot named boop as he works to
              reconstruct his disjointed body with the help of other bots.
            </p>
          </div>
          <img src="/images/GGJAM.png" alt="" width={'35%'} />
        </section>
        <section className="section-content bg-bourdou">
          <img
            className="projects-img"
            src="/images/Bots.png"
            alt=""
            width={'50%'}
          />
          <div className="section-info">
            <h1>ROBOTS</h1>
            <p>
              In this world the inhabitants make due with all they can find, and
              those parts that rained from the sky can definitely be put to use.
              When you explore the world make sure you take the time to talk to
              the robots as they might be able to help rebuild you.
            </p>
          </div>
        </section>
      </div>
      <section className="section-content">
        <div className="section-info bg-bourdou">
          <h1>BOOP</h1>
          <p>
            Boop is a robot of unknown origins. he finds himself as a
            disembodied head that can only move on his spring neck. The more you
            pieces you find the better boop can move the more of this world he
            can explore to hopefully find out what happened.
          </p>
        </div>
        <img src="/images/BoopHead.png" alt="boopHead" />
      </section>
    </div>
  );
}
export default ReboopProject;
