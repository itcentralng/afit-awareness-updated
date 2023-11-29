import { Link } from "react-router-dom";
import "./learn.css";

function Learn() {
  return (
    <div className="container">
      <div className="contained" style={{ width: "90%" }}>
        <div className="learnText">
          <h3 style={{ fontSize: "1.5rem" }}>
            <span className="styledText">LEARN</span> NOW
          </h3>
          <p style={{ fontSize: "1.2rem" }}>
            Welcome to the heart of knowledge exploration! 🚀 Dive into our
            Learn Module and embark on an enriching journey to deepen your
            understanding of climate change and cybersecurity.
          </p>
        </div>
        <div
          className="learnContent"
          style={{ marginTop: "1em", marginBottom: "1em", padding: "1em" }}
        >
          <p style={{ fontSize: "1.2rem", marginBottom: "1em" }}>
            What are you interested in learning about?
          </p>
          <div className="learnBoxes">
            <Link to="/learn-climate" className="climate">
              <h3>Climate change</h3>
            </Link>
            <Link to="/learn-cyber" className="cyberSecurity">
              <h3>Cybersecurity</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
