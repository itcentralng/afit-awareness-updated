import { Route, Routes } from "react-router-dom";
import Home from "./pages/Hero";
import Header from "./pages/Header";
import Learn from "./pages/Learn";
import Game from "./pages/Game";
import ClimateGame from "./pages/game/ClimateGame";
import ClimateLearn from "./pages/ClimateLearn";
import CyberLearn from "./pages/CyberLearn";
import FootprintTrackerPage from "./pages/FootprintTrackerPage";
// import CyberGamePlay from "./pages/game/CyberGamePlay";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/game" element={<Game />} />
        <Route path="/FootprintTrackerPage" element={<FootprintTrackerPage />} />
        <Route path="/climate-game" element={<ClimateGame />} />
        {/* <Route path="/cyber-game" element={<CyberGamePlay />} /> */}
        <Route path="/learn-climate" element={<ClimateLearn />} />
        <Route path="/learn-cyber" element={<CyberLearn />} />
      </Routes>
    </>
  );
}

export default App;
