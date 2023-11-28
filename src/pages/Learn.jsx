import "./learn.css";

function Learn() {
  return (
    <div className="container">
      <div className="contained">
        <div className="learnText">
          <h3>
            <span className="styledText">LEARN</span> NOW
          </h3>
          <p>
            Welcome to the heart of knowledge exploration! 🚀 Dive into our
            Learn Module and embark on an enriching journey to deepen your
            understanding of climate change and cybersecurity.
          </p>
        </div>
        <div className="learnContent">
          <p>What are you interested in learning about?</p>
          <div className="learnBoxes">
            <a href="/learn-climate" className="climate">
              <h3>Climate change</h3>
            </a>
            <a id="generateCyber" className="cyberSecurity">
              <h3>Cybersecurity</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
