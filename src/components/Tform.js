import React, { useState } from "react";
export default function Tform(props) {
  const hundleUpClick = () => {
    // console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };
  const hundleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const hundleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text!","success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const WhiteSpace = () => {
    let updated_text = text.replace(/\s/g, "");
    setText(updated_text);
    props.showAlert("Remove whitespace!","success");
  };
  const reverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Reverse Text!","success");
  };
  const handleCopy = ()=>{
    let cText=document.getElementById("myBox");
    cText.select();
    navigator.clipboard.writeText(cText.value);
    props.showAlert("Copy to clipboard!","success");

  }
  const handleExtraSpaces = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra space!","success");
  };
  const hundleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text="new text";//wrong way to change the state
  //   setText("new text")//correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#030624'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={hundleOnChange}
            style={{backgroundColor:props.mode=== 'dark'?'grey':'white',color:props.mode=== 'dark'?'white':'#030624'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={hundleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={hundleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={hundleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-1 " type="submit" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary mx-1" onClick={WhiteSpace}>
         remove White Space
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        removeExtraSpaces
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={reverseText}>
          reverseText
        </button>
      </div>
      <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary </h2>
        <p>
          Word{text.split(" ").length} and Character{text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text in the textbox about to prewiew it"}</p>
      </div>
    </>
  );
}








