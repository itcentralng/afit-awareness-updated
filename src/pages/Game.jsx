/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./game.css";

function Game() {
  // useEffect(() => {
  //   climateFunction();
  //   cyberFunction();
  // }, []);
  // function climateFunction() {
  //   const questions = document.querySelectorAll(".climateQuestion");
  //   let currentQuestion = 0;
  //   let correctAnswers = 0;

  //   function showQuestion(index) {
  //     questions.forEach((question) => (question.style.display = "none"));
  //     questions[index].style.display = "block";
  //   }

  //   function validateAnswers() {
  //     const userAnswers = [];

  //     for (let i = 0; i < questions.length; i++) {
  //       const radios = questions[i].querySelectorAll('input[type="radio"]');
  //       let answered = false;

  //       radios.forEach((radio) => {
  //         if (radio.checked) {
  //           answered = true;
  //           userAnswers.push(radio.value);
  //           if (radio.value === getCorrectAnswer(i)) {
  //             correctAnswers++;
  //           }
  //         }
  //         radio.disabled = true;
  //       });

  //       if (!answered) {
  //         userAnswers.push(null);
  //       }
  //     }

  //     return userAnswers;
  //   }

  //   function getCorrectAnswer(questionIndex) {
  //     const correctAnswersMap = {
  //       0: "b",
  //       1: "c",
  //       2: "b",
  //       3: "c",
  //       4: "c",
  //     };
  //     return correctAnswersMap[questionIndex];
  //   }

  //   function showResultPage() {
  //     const userAnswers = validateAnswers();
  //     if (correctAnswers === questions.length) {
  //       alert("Congratulations! You answered all questions correctly!");
  //     } else {
  //       alert(
  //         "Oops! You did not answer all questions correctly. Please retake the quiz."
  //       );
  //       currentQuestion = 0;
  //       correctAnswers = 0;
  //       showQuestion(currentQuestion);
  //     }
  //   }

  //   document.querySelectorAll(".climateNext").forEach((button) => {
  //     button.addEventListener("click", function () {
  //       if (currentQuestion < questions.length - 1) {
  //         currentQuestion++;
  //         showQuestion(currentQuestion);
  //       }
  //     });
  //   });

  //   document.querySelectorAll(".climatePrev").forEach((button) => {
  //     button.addEventListener("click", function () {
  //       if (currentQuestion > 0) {
  //         currentQuestion--;
  //         showQuestion(currentQuestion);
  //       }
  //     });
  //   });

  //   document
  //     .getElementById("climateForm")
  //     .addEventListener("submit", function (event) {
  //       event.preventDefault(); // Prevent default form submission behavior
  //       showResultPage();
  //     });

  //   showQuestion(currentQuestion);
  // }

  // function cyberFunction() {
  //   const questions = document.querySelectorAll(".cyberQuestion");
  //   let currentQuestion = 0;
  //   let correctAnswers = 0;

  //   function showQuestion(index) {
  //     questions.forEach((question) => (question.style.display = "none"));
  //     questions[index].style.display = "block";
  //   }

  //   function validateAnswers() {
  //     const userAnswers = [];

  //     for (let i = 0; i < questions.length; i++) {
  //       const radios = questions[i].querySelectorAll('input[type="radio"]');
  //       let answered = false;

  //       radios.forEach((radio) => {
  //         if (radio.checked) {
  //           answered = true;
  //           userAnswers.push(radio.value);
  //           if (radio.value === getCorrectAnswer(i)) {
  //             correctAnswers++;
  //           }
  //         }
  //         radio.disabled = true;
  //       });

  //       if (!answered) {
  //         userAnswers.push(null);
  //       }
  //     }

  //     return userAnswers;
  //   }

  //   function getCorrectAnswer(questionIndex) {
  //     const correctAnswersMap = {
  //       0: "c",
  //       1: "b",
  //       2: "c",
  //       3: "c",
  //       4: "c",
  //     };
  //     return correctAnswersMap[questionIndex];
  //   }

  //   function showResultPage() {
  //     const userAnswers = validateAnswers();
  //     if (correctAnswers === questions.length) {
  //       alert("Congratulations! You answered all questions correctly!");
  //     } else {
  //       alert(
  //         "Oops! You did not answer all questions correctly. Please retake the quiz."
  //       );
  //       currentQuestion = 0;
  //       correctAnswers = 0;
  //       showQuestion(currentQuestion);
  //     }
  //   }

  //   document.querySelectorAll(".cyberNext").forEach((button) => {
  //     button.addEventListener("click", function () {
  //       if (currentQuestion < questions.length - 1) {
  //         currentQuestion++;
  //         showQuestion(currentQuestion);
  //       }
  //     });
  //   });

  //   document.querySelectorAll(".cyberPrev").forEach((button) => {
  //     button.addEventListener("click", function () {
  //       if (currentQuestion > 0) {
  //         currentQuestion--;
  //         showQuestion(currentQuestion);
  //       }
  //     });
  //   });

  //   document
  //     .getElementById("cyberForm")
  //     .addEventListener("submit", function (event) {
  //       event.preventDefault(); // Prevent default form submission behavior
  //       showResultPage();
  //     });

  //   showQuestion(currentQuestion);
  // }

  return (
    <body>
      <div className="container">
        <div className="games">
          <h1>Play Games</h1>
          <div className="play">
            <div className="climate">
              <p>
                For the Climate Change Awareness, click the button below to play
                a fun and interactive game.
              </p>
              <Link
                style={{
                  backgroundColor: "#0a005b",
                  padding: ".7em 3em",
                  borderRadius: "10px",
                  textDecoration: "none",
                  color: "#fff",
                }}
                className="game-btn"
                to="/climate-game"
              >
                Play
              </Link>
            </div>
            <div className="cyberSecurity">
              <p>
                For the Cybersecurity Awareness, click the button below to play
                a fun and interactive game.
              </p>
              <Link
                style={{
                  backgroundColor: "#0a005b",
                  padding: ".7em 3em",
                  borderRadius: "10px",
                  textDecoration: "none",
                  color: "#fff",
                }}
                className="game-btn"
                to="https://afit-awareness-app.vercel.app/game/cyberGame.html"
              >
                Play
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="quiz">
          <h1>User Challenge</h1>
          <div className="takeQuiz">
            <div className="climatequiz">
              <p>Answer this short quiz related to Climate Change awareness</p>
              <div className="quiz-section" id="quiz">
                <form id="climateForm">
                  <div className="climateQuestion" data-question="1">
                    <h3>Question 1</h3>
                    <p>What is the main cause of global warming?</p>
                    <input type="radio" name="q" value="a" /> Acid rain
                    <br />
                    <input type="radio" name="q1" value="b" /> Greenhouse gases
                    <br />
                    <input type="radio" name="q1" value="c" /> Ozone depletion
                    <br />
                    <input type="radio" name="q1" value="d" /> Air pollution
                    <br />
                    <button type="button" className="climateNext">
                      Next
                    </button>
                  </div>
                  <div
                    className="climateQuestion"
                    data-question="2"
                    style={{ display: "none" }}
                  >
                    <h3>Question 2</h3>
                    <p>Which of the following is a renewable energy source?</p>
                    <input type="radio" name="q2" value="a" /> Coal
                    <br />
                    <input type="radio" name="q2" value="b" /> Natural Gas
                    <br />
                    <input type="radio" name="q2" value="c" /> Solar power
                    <br />
                    <input type="radio" name="q2" value="d" /> Petroleum
                    <br />
                    <button type="button" className="climatePrev">
                      Previous
                    </button>
                    <button type="button" className="climateNext">
                      Next
                    </button>
                  </div>
                  <div
                    className="climateQuestion"
                    data-question="3"
                    style={{ display: "none" }}
                  >
                    <h3>Question 3</h3>
                    <p>What is deforestation primarily driven by?</p>
                    <input type="radio" name="q3" value="a" /> Urbanization
                    <br />
                    <input type="radio" name="q3" value="b" /> Agricultural
                    expansion
                    <br />
                    <input type="radio" name="q3" value="c" /> Mining
                    <br />
                    <input type="radio" name="q3" value="d" />
                    Industrialization
                    <br />
                    <button type="button" className="climatePrev">
                      Previous
                    </button>
                    <button type="button" className="climateNext">
                      Next
                    </button>
                  </div>
                  <div
                    className="climateQuestion"
                    data-question="4"
                    style={{ display: "none" }}
                  >
                    <h3>Question 4</h3>
                    <p>
                      Which gas is most responsible for trapping heat in the
                      Earth's atmosphere?
                    </p>
                    <input type="radio" name="q4" value="a" /> Oxygen
                    <br />
                    <input type="radio" name="q4" value="b" /> Nitrogen
                    <br />
                    <input type="radio" name="q4" value="c" /> Carbon dioxide
                    <br />
                    <input type="radio" name="q4" value="d" /> Methane
                    <br />
                    <button type="button" className="climatePrev">
                      Previous
                    </button>
                    <button type="button" className="climateNext">
                      Next
                    </button>
                  </div>
                  <div
                    className="climateQuestion"
                    data-question="5"
                    style={{ display: "none" }}
                  >
                    <h3>Question 5</h3>
                    <p>
                      What is a major consequence of rising sea levels due to
                      climate change?
                    </p>
                    <input type="radio" name="q5" value="a" /> Increased
                    agricultural productivity
                    <br />
                    <input type="radio" name="q5" value="b" /> Expansion of
                    freshwater sources
                    <br />
                    <input type="radio" name="q5" value="c" /> Displacement of
                    coastal communities
                    <br />
                    <input type="radio" name="q5" value="d" /> Decreased
                    frequency of natural disasters
                    <br />
                    <button type="button" className="climatePrev">
                      Previous
                    </button>
                    <button type="submit">Submit Quiz</button>
                  </div>
                </form>
              </div>
            </div>


            <div className="cyberquiz">
              <p>Answer this short quiz related to Cybersecurity awareness</p>
              <div className="quiz-section" id="quiz">
                <form id="cyberForm">
                  <div className="cyberQuestion" data-question="1">
                    <h3>Question 1</h3>
                    <p>
                      What is the best practice for creating strong passwords?
                    </p>
                    <input type="radio" name="q1" value="a" /> Using easily
                    guessable information
                    <br />
                    <input type="radio" name="q1" value="b" /> Sharing passwords
                    with trusted friends
                    <br />
                    <input type="radio" name="q1" value="c" /> Using a mix of
                    letters, numbers, and symbols
                    <br />
                    <input type="radio" name="q1" value="d" /> Writing passwords
                    down on a sticky note
                    <br />
                    <button type="button" className="cyberNext">
                      Next
                    </button>
                  </div>
                  <div
                    className="cyberQuestion"
                    data-question="2"
                    style={{ display: "none" }}
                  >
                    <h3>Question 2</h3>
                    <p>What does 'Phishing' refer to in cyber security?</p>
                    <input type="radio" name="q2" value="a" /> A method for
                    catching cyber criminals
                    <br />
                    <input type="radio" name="q2" value="b" /> A fraudulent
                    attempt to obtain sensitive information
                    <br />
                    <input type="radio" name="q2" value="c" /> A way to secure
                    online accounts
                    <br />
                    <input type="radio" name="q2" value="d" /> A security
                    protocol for networks
                    <br />
                    <button type="button" className="cyberPrev">
                      Previous
                    </button>
                    <button type="button" className="cyberNext">
                      Next
                    </button>
                  </div>
                  <div
                    className="cyberQuestion"
                    data-question="3"
                    style={{ display: "none" }}
                  >
                    <h3>Question 3</h3>
                    <p>
                      What is the purpose of two-factor authentication (2FA)?
                    </p>
                    <input type="radio" name="q3" value="a" /> Securing physical
                    locations
                    <br />
                    <input type="radio" name="q3" value="b" /> Protecting
                    against ransomware
                    <br />
                    <input type="radio" name="q3" value="c" /> Adding an extra
                    layer of security to accounts
                    <br />
                    <input type="radio" name="q3" value="d" /> Encrypting files
                    and folders
                    <br />
                    <button type="button" className="cyberPrev">
                      Previous
                    </button>
                    <button type="button" className="cyberNext">
                      Next
                    </button>
                  </div>
                  <div
                    className="cyberQuestion"
                    data-question="4"
                    style={{ display: "none" }}
                  >
                    <h3>Question 4</h3>
                    <p>
                      What is the importance of regularly updating software?
                    </p>
                    <input type="radio" name="q4" value="a" /> Enhancing device
                    aesthetics
                    <br />
                    <input type="radio" name="q4" value="b" /> Reducing battery
                    consumption
                    <br />
                    <input type="radio" name="q4" value="c" /> Patching security
                    vulnerabilities
                    <br />
                    <input type="radio" name="q4" value="d" /> Adding new
                    features to applications
                    <br />
                    <button type="button" className="cyberPrev">
                      Previous
                    </button>
                    <button type="button" className="cyberNext">
                      Next
                    </button>
                  </div>
                  <div
                    className="cyberQuestion"
                    data-question="5"
                    style={{ display: "none" }}
                  >
                    <h3>Question 5</h3>
                    <p>What should individuals do to protect sensitive data?</p>
                    <input type="radio" name="q5" value="a" /> Share it with
                    close family members
                    <br />
                    <input type="radio" name="q5" value="b" /> Store it in
                    public locations
                    <br />
                    <input type="radio" name="q5" value="c" /> Keep it secure
                    and limit access
                    <br />
                    <input type="radio" name="q5" value="d" /> Post it on social
                    media
                    <br />
                    <button type="button" className="cyberPrev">
                      Previous
                    </button>
                    <button type="submit">Submit Quiz</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </body>
  );
}

export default Game;
