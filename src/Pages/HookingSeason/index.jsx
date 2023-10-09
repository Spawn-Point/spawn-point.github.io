import { Link } from 'react-router-dom';
function HookingSeason() {
  return (
    <div className="hookingSeasonPage">
      <div className="hs-banner">
        <img
          src="/images/store_capsule_main_transparent.png"
          alt="store-capsule"
        />
      </div>
      <section className="carousel bg-dark">
        <img src="/images/hs1.png" alt="hs1" />
        <video
          src="/public/images/49 - FirstTrailer.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <img src="/images/hs2.png" alt="hs2" />
        <img src="/images/hs3.png" alt="hs3" />
        <img src="/images/hs4.png" alt="hs4" />
        <img src="/images/hs5.png" alt="hs5" />
        <img src="/images/hs6.png" alt="hs6" />
        <img src="/images/hs7.png" alt="hs7" />
        <img src="/images/hs8.png" alt="hs8" />
        <img src="/images/hs9.png" alt="hs9" />
        <img src="/images/hs10.png" alt="hs10" />
        <img src="/images/hs11.png" alt="hs11" />
        <img src="/images/hs12.png" alt="hs12" />
        <img src="/images/hs13.png" alt="hs13" />
        <img src="/images/hs14.png" alt="hs14" />
        <img src="/images/hs15.png" alt="hs15" />
        <img src="/images/hs16.png" alt="hs16" />
        <img src="/images/hs17.png" alt="hs17" />
        <img src="/images/hs18.png" alt="hs18" />
        <img src="/images/hs19.png" alt="hs19" />
        <img src="/images/hs20.png" alt="hs20" />
        <img src="/images/hs21.png" alt="hs21" />
        <img src="/images/hs22.png" alt="hs22" />
        <img src="/images/hs23.png" alt="hs23" />
        <img src="/images/hs24.png" alt="hs24" />
        <img src="/images/hs25.png" alt="hs25" />
        <img src="/images/hs26.png" alt="hs26" />
        <img src="/images/hs27.png" alt="hs27" />
        <img src="/images/hs28.png" alt="hs28" />
        <img src="/images/hs29.png" alt="hs29" />
        <img src="/images/hs30.png" alt="hs30" />
        <img src="/images/hs31.png" alt="hs31" />
        <img src="/images/hs32.png" alt="hs32" />
      </section>
      <section className="hs-game hs-banner">
        <div className="section-info">
          <h1>The Game</h1>
          <p>
            Hooking Season is a chaotic couch competitive new take on the twin
            stick shooter gameplay. ​
          </p>
        </div>
        <div>
          <img src="/images/jack.png" alt="" width={'340px'} />
        </div>
      </section>
      <section className="roster bg-dark">
        <div>
          <img src="/images/Chars.png" alt="" width={'500px'} />
        </div>
        <div className="section-info">
          <h1>Roster</h1>
          <p>
            Play as your favorite holiday character and use their unique
            abilities to help their team prove once and for all which is the
            best holiday and take the Holiday Throne.
          </p>
        </div>
      </section>
      <section className="hook hs-banner">
        <h1>Hook</h1>
        <div className="hook-section1">
          <img src="/images/Page_Eat_Anim.gif" alt="Page_Eat_Anim" />
          <p>
            The hook is the main tool in your arsenal, you can use it to quickly
            move around the map, grab items and enemies from afar. Each
            character has their own signature hook in order to make sure they
            stand out in any brawl.
          </p>
        </div>
        <div className="hook-section2">
          <p>
            Size is a very important part of mastering your hook technique, when
            hooking lighter objects, or players, they get pulled towards you.
          </p>
          <p>
            Hooking heavier objects, such as walls or cars, will cause you to
            move towards them instead BUT beware hooking heavier players doesn't
            seem to work very well and often it just makes them angrier.
          </p>
          <p>
            Weight can be gained by either hooking/eating food or smaller
            players.
          </p>
        </div>
      </section>
      <section className="steam bg-dark">
        <div className="steam-info">
          <h1>Coming to Steam 31st of October</h1>
          <Link
            to="https://store.steampowered.com/app/2008530/Hooking_Season/"
            target="_blank"
          >
            <i className="fab fa-steam fa-6x"></i>
          </Link>
        </div>
        <img src="/images/Bunny.png" alt="bunny" width={'550px'} />
      </section>
      <section className="discord">
        <Link to="https://discord.com/invite/qrCV945w" target="_blank">
          <img src="/images/Discord.png" alt="discord" />
        </Link>
      </section>
      <section className="bg-dark">
        <div className="lxGame">
          <Link>
            <img src="/images/LGW-logo.png" alt="LGW-logo" width={'339px'} />
          </Link>
          <p>
            Thank you for everyone who came to check out the game, and
            congratulations to all our prize winners.
          </p>
        </div>
        <div className="dreamHack">
          <Link to="https://dreamhack.com/atlanta/">
            <img
              className="dreamHack-img"
              src="/images/DreamHack_Logo_RGB_WHITE.png"
              alt="DreamHack"
              width={'605px'}
            />
          </Link>
          <img
            src="/images/Leprochaun2.png"
            alt="Leprochaun2"
            width={'346px'}
          />
        </div>
      </section>
    </div>
  );
}
export default HookingSeason;
