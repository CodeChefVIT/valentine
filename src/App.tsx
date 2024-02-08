import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really SURE?",
  "You'll make me cry..",
  "Please ;(",
];

const gifs = [
  "src\\assets\\gif1.gif",
  "src\\assets\\gif2.gif",
  "src\\assets\\gif3.gif",
  "src\\assets\\gif4.gif"
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesSize = noCount * 15 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
    const yesBtn = document.getElementById("yesButton");
    const noBtn = document.getElementById("noButton");
    if(noBtn && yesBtn)
    {
      noBtn.style.position = "absolute";
      noBtn.style.transition = "top 0.3s ease-in-out, right 0.3s ease-in-out";
      noBtn.style.top = `${Math.random() * 375}px`;
      noBtn.style.right = `${Math.random() * 375}px`;
      yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
      yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;
    }
  }

  function getNoGif() {
    return gifs[noCount % gifs.length];
  }

  function getNoButtonText() {
    return phrases[noCount % phrases.length];
  }

  return (
    <>
      <div className="valentine">
        {yesPressed ? (
          <>
            <img src="src\\assets\\gifyes.gif" alt="yes"/>
            <div className="text">Yayyy!!!</div>
          </>
        ) : (
          <>
            <img src={getNoGif()} alt="no" />
            <div className="text">Will you be my valentine?</div>
            <div>
              <button
                id="yesButton"
                style={{ fontSize: yesSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} id="noButton">
                {getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default App;
