import styles from "./home.module.css";
import afitLogo from "../assets/AFIT.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className={styles.logo}>
        <img src={afitLogo} alt="" />
        <h1>AFIT Awareness</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/game">Gamification</Link>
        </li>
        <li>
          <Link to="/FootprintTrackerPage">Footprint Tracker</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
