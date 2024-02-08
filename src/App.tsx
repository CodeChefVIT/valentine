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
  "src\\images\\gif1.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXNvcDlzaXlubTg1ZmU3Zmc3N2Q4cXgwdXJ1cXR3enYwZ2FiejFuaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K6WIhJ07gwGkIAQfwN/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTI4ZXF4MmJjYWYxdWo0aGZudG5heWpibTdqNGplOXFxcm8zbHZvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SHdwS47nztG2MHCOTH/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnN1endwcG83cjdkeWhmamxkMnMwejNnZ3lod3V2ZnhhZzI4bTR5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUOwFZmWUC2QDHKu4M/giphy.gif",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesSize = noCount * 15 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
    const yesBtn = document.getElementById("yesButton");
    const noBtn = document.getElementById("noButton");
    noBtn.style.position = "absolute";
    noBtn.style.transition = "top 0.3s ease-in-out, right 0.3s ease-in-out";
    noBtn.style.top = `${Math.random() * 250}px`;
    noBtn.style.right = `${Math.random() * 250}px`;
    yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
    yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;
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
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDNwbTV5bG43NDdqdXM5dXd2MDFuOXVqYmtvNDk0djg2d291cW40YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KztT2c4u8mYYUiMKdJ/giphy.gif"
              alt="yes"
            />
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
