import { useState } from "react";
import "./App.css";

export default function App() {
  let colours = ["red", "orange", "yellow", "green", "blue"];

  const [colourIndex, setColourIndex] = useState(0);

  return (
    <>
      <div
        style={{ backgroundColor: colours[colourIndex] }}
        className="square"
      ></div>
      <button
        onClick={() => setColourIndex((colourIndex + 1) % colours.length)}
      >
        Change colour
      </button>
    </>
  );
}
