import "./cyberGame.css";
import "./cyberGameLogic.js";

function CyberGamePlay() {
  return (
    <body>
      <canvas id="c"></canvas>

      <div className="hud">
        <div className="hud__score">
          <div className="score-lbl"></div>
          <div className="cube-count-lbl"></div>
        </div>
        <div className="pause-btn">
          <div></div>
        </div>
        <div className="slowmo">
          <div className="slowmo__bar"></div>
        </div>
      </div>

      <div className="menus">
        <div className="menu menu--main">
          <h1>Kill Viruses</h1>
          <button type="button" className="play-normal-btn">
            DESTROY VIRUS GAME
          </button>
          <button type="button" className="play-casual-btn">
            FIREWALLS MODE
          </button>
          <div className="credits">
            <p>Destroy the viruses before they infect your devices.</p>
          </div>
        </div>
        <div className="menu menu--pause">
          <h1>Paused</h1>
          <button type="button" className="resume-btn">
            RESUME GAME
          </button>
          <button type="button" className="menu-btn--pause">
            MAIN MENU
          </button>
        </div>
        <div className="menu menu--score">
          <h1>Game Over</h1>
          <h2>Firewalls strength Score:</h2>
          <div className="final-score-lbl"></div>
          <div className="high-score-lbl"></div>
          <button type="button" className="play-again-btn">
            PLAY AGAIN
          </button>
          <button type="button" className="menu-btn--score">
            MAIN MENU
          </button>
        </div>
      </div>
    </body>
  );
}

export default CyberGamePlay;
