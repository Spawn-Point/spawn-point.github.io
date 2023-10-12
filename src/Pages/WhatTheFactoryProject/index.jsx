import { Link } from 'react-router-dom';

function WhatTheFactoryProject() {
  return (
    <div className="wtfPage page">
      <section className="wtf-showcase">
        <img src="/images/factory.png" alt="wtf" />
      </section>
      <section className="carousel bg-dark">
        <Link to="/images/wtf1.png" target="_blank">
          <img src="/images/wtf1.png" alt="wtf1" />
        </Link>
        <Link to="/images/wtf2.png" target="_blank">
          <img src="/images/wtf2.png" alt="wtf2" />
        </Link>
        <Link to="/images/wtf3.png" target="_blank">
          <img src="/images/wtf3.png" alt="wtf3" />
        </Link>
        <Link to="/images/wtf4.png" target="_blank">
          <img src="/images/wtf4.png" alt="wtf4" />
        </Link>
        <Link to="/images/wtf5.png" target="_blank">
          <img src="/images/wtf5.png" alt="wtf5" />
        </Link>
        <Link to="/images/wtf6.png" target="_blank">
          <img src="/images/wtf6.png" alt="wtf6" />
        </Link>
        <Link to="/images/wtf7.png" target="_blank">
          <img src="/images/wtf7.png" alt="wtf7" />
        </Link>
        <Link to="/images/wtf8.png" target="_blank">
          <img src="/images/wtf8.png" alt="wtf8" />
        </Link>
        <Link to="/images/wtf9.png" target="_blank">
          <img src="/images/wtf9.png" alt="wtf9" />
        </Link>
        <Link to="/images/wtf10.png" target="_blank">
          <img src="/images/wtf10.png" alt="wtf10" />
        </Link>
      </section>
      <section className="section-content">
        <div className="section-info factory-text">
          <h1>The Game</h1>
          <p>
            Ready for totally avoidable factory accidents? In this game, it's
            your job to prevent the death of your workers who insist on putting
            themselves right in the middle of danger by dragging them around and
            operating the machines at the right time. If you enjoy hectic,
            quick-thinking experiences this game is for you!
          </p>
        </div>
        <img className="constructorMan" src="/images/spritesheet4.png" alt="" />
      </section>
      <section className="section-content bg-dark">
        <img className="factory-sheet" src="/images/LV01_Page.png" alt="" />
        <div className="section-info factory-text">
          <h1>Factories</h1>
          <p>
            Manage several factories that get more complex and demanding than
            the one before. Make sure you keep as many workers alive as you can
            at the end of the day, while making the most money.
          </p>
        </div>
      </section>
      <section className="section-with3">
        <img src="/images/Pit.png" alt="" width={'500px'} />
        <div className="section-info factory-text">
          <div className="machines-title">
            <img src="/images/Blood_Splat.png" alt="" />
            <h1>Machines</h1>
          </div>
          <p>
            All of the machines in the factories are top of the line regardless
            of what the government or the police say. But just in case make sure
            to keep an eye on the machines when workers are nearby.
          </p>
        </div>
        <img src="/images/Stuffing.png" alt="" width={'25%'} />
      </section>
    </div>
  );
}
export default WhatTheFactoryProject;
