import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🎮": "Game",
  "😎": "cool",
  "✨": "sparkles",
  "😔": "sad",
  "💰": "Money",
  "😱": "fear",
  "😭": "crying",
  "😂": "laughing",
  "👻": "ghost",
  "😴": "sleeping",
  "♻️": "recycle"
};

var emojisInDatabase = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "oops! we dont have that one!😐";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ fontStyle: "italic" }}>
        <span style={{ color: "red" }}>Emoji </span>
        <span style={{ color: "white" }}>Translator!</span>
      </h1>
      <h3 style={{ fontStyle: "italic" }}>
        Enter an emoji and we will display the meaning for the same if we have
        that in our database.
      </h3>
      <input onChange={emojiInputHandler} />
      <h2 style={{ color: "blue", fontStyle: "italic" }}> {meaning} </h2>
      <h3>Emojis available:</h3>
      {emojisInDatabase.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2.5rem",
              padding: "0.75rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
