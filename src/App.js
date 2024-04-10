import React, { useState } from "react";
import "./App.css";

function App() {
  const [fontSize, setFontSize] = useState(16); // Initial font size

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 5); // Increase font size by 5px
  };

  return (
    <div className="App">
      <div id="valentineQuestion"><b>Bà ơi, đi chơi với tui nhé</b></div>
      <button className="answerButton" onClick={() => window.location.href = '/thankyou'}>
        Dạaaa
      </button>
      <button className="answerButton" onClick={increaseFontSize} style={{ fontSize: `${fontSize}px` }}>
        Em hong chịu đâu
      </button>
      <br />
      <img src="https://phamvulinh18.github.io/Date/cat.gif" alt="cat asking question" className="responsive"/>
    </div>
  );
}

export default App;
