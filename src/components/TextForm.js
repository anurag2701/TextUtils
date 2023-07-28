import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!!", "success");

  };
  const handleDownClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!!", "success");

  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleRevStr = () => {
    let newString = "";
    let str = text;
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i]; // or newString = newString + str[i];
    }
    setText(newString);
    props.showAlert("Reversed!!", "success");

  };
  const handleClear = () => {
    setText("");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // alert("Your text has been copied");
    props.showAlert("Copied to clipboard!!", "success");
  };
  const handleRemoveExtraSpaces = () => {
    let result = text.split(/[  ]+/).join(" ");
    setText(result);
    props.showAlert("Extra spaces removed!!", "success");

  };

  const [text, setText] = useState("");

  return (
    <>
      {/* Text area group */}
      <div className={`mb-3 container text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{color: props.mode === 'light' ? 'white' : 'gray'}} >
        <h1>{props.heading} </h1>
        <label htmlFor="MyBox">Enter text to analyse below</label>
        {props.mode}
        <textarea className="form-control" id="MyBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
      </div>

      {/* Button group */}
      <div className="container">
        <button className="btn  btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRevStr}>
          Reverse string
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>
          Remove Exxtra Spaces
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>

      {/* Preview group */}
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} words, {text.length} characters</p>
      </div>
    </>
  );
}
