import { Link } from "react-router-dom";
import "./climateGame.css";

function ClimateGame() {
  return (
    <body>
      <div className="wrapper">
        <div className="timer">
          <span></span>
        </div>
        <div className="gameover" style={{ display: " flex" }}>
          <Link to="/climate-game">Continue keeping the atmosphere clean</Link>
          <br />
          <p>
            <b>OR</b>
          </p>
          <Link to="/game">Home</Link>
        </div>
        <h1>
          POLLUTANTS <span>(Kill the Pollutants)</span>
        </h1>
        <h2>
          Shoot the Pollutant before the <br />
          contaminate the Atmosphere!
        </h2>
        <input
          className="input-circle input-circle1"
          type="radio"
          id="circle1"
        />
        <input
          className="input-circle input-circle2"
          type="radio"
          id="circle2"
        />
        <input
          className="input-circle input-circle3"
          type="radio"
          id="circle3"
        />
        <input
          className="input-circle input-circle4"
          type="radio"
          id="circle4"
        />
        <input
          className="input-circle input-circle5"
          type="radio"
          id="circle5"
        />
        <input
          className="input-circle input-circle6"
          type="radio"
          id="circle6"
        />

        <label htmlFor="circle1" className="pajaro pajaro1">
          <span></span>
        </label>
        <label htmlFor="circle2" className="pajaro pajaro2">
          <span></span>
        </label>
        <label htmlFor="circle3" className="pajaro pajaro3">
          <span></span>
        </label>
        <label htmlFor="circle4" className="pajaro pajaro4">
          <span></span>
        </label>
        <label htmlFor="circle5" className="pajaro pajaro5">
          <span></span>
        </label>
        <label htmlFor="circle6" className="pajaro pajaro6">
          <span></span>
        </label>
        <div className="sum">SCORE:</div>

        <footer>
          <p style={{ color: "rgb(10, 196, 196)" }}>
            keep our atmosphere clean
          </p>
        </footer>
      </div>
    </body>
  );
}
export default ClimateGame;
