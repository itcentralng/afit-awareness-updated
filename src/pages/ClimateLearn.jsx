import climateVideo from "../assets/Climate Change Awareness Video.mp4";

function ClimateLearn() {
  return (
    <div className="climate-modal">
      <video controls src={climateVideo}></video>
      <div className="generate">
        <div className="generatedContent" id="generate-text"></div>
        <div className="generatedContent" id="generate-text"></div>
        <div className="generatedContent" id="generate-text"></div>
      </div>
    </div>
  );
}

export default ClimateLearn;
