import climateVideo from "../assets/Climate Change Awareness Video.mp4";
import { useState } from "react";

import chatBot from "../../Ai";

function ClimateLearn() {
  const [userPrompt, setUserPrompt] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");
  const [error, setError] = useState("");

  const handleGenerateResponse = async () => {
    if (!userPrompt) {
      setError("Please enter a prompt.");
      return;
    }

    setError("");

    try {
      const response = await chatBot(userPrompt);
      setGeneratedResponse(response);
    } catch (error) {
      setError("Failed to generate a response. Please try again later.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2em",
      }}
    >
      <div style={{ width: "90%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <video
            src={climateVideo}
            controls
            style={{
              alignSelf: "flex-start",
              marginBottom: "2em",
              marginTop: ".5em",
              width: "500px",
            }}
          ></video>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <textarea
              placeholder="Ask your questions about Climate and Climate change here."
              value={userPrompt}
              onChange={(event) => setUserPrompt(event.target.value)}
              style={{ width: "30em", height: "15em" }}
            />
            <button
              onClick={handleGenerateResponse}
              style={{ backgroundColor: "#0a005b" }}
            >
              Generate Response
            </button>
          </div>
        </div>
        <div className="chatPrompts">
          <div style={{ display: "block" }}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {generatedResponse && (
              <div>
                <h3 style={{ fontSize: "1.5rem" }}>Generated Response:</h3>
                <p style={{ fontSize: "1.2rem" }}>{generatedResponse}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClimateLearn;
