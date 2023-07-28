import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App(props) {
  const [mode, setMode] = useState("light");
  const [alertText, setAlertText] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray ";
      showAlert("Dark mode activated!!!", "success");
      document.title = "TextUtils - Light Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated!!!", "success");
      document.title = "TextUtils - Dark Mode";
    }
  };
  const showAlert = (message, type) => {
    setAlertText({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlertText(null);
    }, 2500);
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alertText={alertText} />
      <div className="container my-3">
        <BrowserRouter>
          <Routes>
            {/* <Route path='Path You want to use' element={<What you want to render >}/>  */}
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm mode={mode} heading="TextUtils" showAlert={showAlert} />}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>

      {/* Old code */}
      {/* 
        <TextForm mode={mode} heading="TextUtils" showAlert={showAlert} />
        <About />
      </div> */}
    </>
  );
}

export default App;
