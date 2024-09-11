import React, { useState } from "react";
import Navbar from "./Navbar"; 

const App = () => {
  const [cnt, setCnt] = useState({ wordCount: 0, charCount: 0, clickCount: 0 });
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [mode, setMode] = useState("light");

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    
    // Count words and characters
    const words = newText.trim().split(/\s+/).filter(Boolean);
    setCnt({
      wordCount: words.length,
      charCount: newText.length,
      clickCount: cnt.clickCount,
    });
  };

  const countBtnClicked = () => {
    setCnt({ ...cnt, clickCount: cnt.clickCount + 1 });
    setText(text.toUpperCase());
  };

  const count1BtnClicked = () => {
    setCnt({ ...cnt, clickCount: cnt.clickCount + 1 });
    setText(text.toLowerCase());
  };

  const makeBold = () => {
    setCnt({ ...cnt, clickCount: cnt.clickCount + 1 });
    setBold(!bold);
  };

  const makeItalic = () => {
    setCnt({ ...cnt, clickCount: cnt.clickCount + 1 });
    setItalic(!italic);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const handleModeToggle = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app-container bg-${mode}`} style={{ minHeight: '100vh', color: mode === 'dark' ? 'white' : 'black' }}>
      <Navbar link="/" onModeToggle={handleModeToggle} mode={mode} />
      
      <div style={{ textAlign: 'center' }}>
        <textarea
          style={{
            fontSize: '30px',
            fontWeight: bold ? 'bold' : 'normal',
            fontStyle: italic ? 'italic' : 'normal',
            backgroundColor: mode === 'dark' ? '#333' : '#fff',
            color: mode === 'dark' ? '#fff' : '#000'
          }}
          rows="8"
          cols="99"
          placeholder="Enter some text"
          value={text}
          onChange={handleTextChange}
        ></textarea>
      </div>

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button
          type="button"
          className={`btn ${cnt.clickCount > 10 ? 'btn-danger' : 'btn-primary'}`}
          style={{ margin: '10px', backgroundColor: 'blue' }}
          onClick={count1BtnClicked}
        >
          Lowercase
        </button>
        <button
          type="button"
          className={`btn ${cnt.clickCount > 10 ? 'btn-danger' : 'btn-primary'}`}
          style={{ margin: '10px', backgroundColor: 'green' }}
          onClick={countBtnClicked}
        >
          Uppercase
        </button>
        <button
          type="button"
          className={`btn ${cnt.clickCount > 10 ? 'btn-danger' : 'btn-primary'}`}
          style={{ margin: '10px', backgroundColor: 'orange' }}
          onClick={makeBold}
        >
          Bold
        </button>
        <button
          type="button"
          className={`btn ${cnt.clickCount > 10 ? 'btn-danger' : 'btn-primary'}`}
          style={{ margin: '10px', backgroundColor: 'purple' }}
          onClick={makeItalic}
        >
          Italic
        </button>
        <button
          type="button"
          className={`btn ${cnt.clickCount > 10 ? 'btn-danger' : 'btn-primary'}`}
          style={{ margin: '10px', backgroundColor: 'red' }}
          onClick={handleCopyToClipboard}
        >
          Copy to Clipboard
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Text Summary:</h2>
        <p>Number of words: {cnt.wordCount}</p>
        <p>Number of characters: {cnt.charCount}</p>
        <h3>
          Button Clicks:{" "}
          <span style={{ color: cnt.clickCount > 10 ? 'red' : 'black' }}>
            {cnt.clickCount}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default App;
