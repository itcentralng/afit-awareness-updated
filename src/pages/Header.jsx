import styles from "./home.module.css";
import afitLogo from "../assets/AFIT.png";

function Header() {
  return (
    <nav>
      <div className={styles.logo}>
        <img src={afitLogo} alt="" />
        <h1>AFIT Awareness</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/learn">Learn</a>
        </li>
        <li>
          <a href="/game">Gamification</a>
        </li>
        <li>
          <a href="/x.html">Footprint Tracker</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
