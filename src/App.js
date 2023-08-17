import "./App.css";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Tform from "./components/Tform";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is  enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#030624";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils - DarkMode";
      //just for learning how to spark titile
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = " install TextUtils ";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  }
  // return(
  //   <>
  //     <Router>
  //       <Navbar
  //         title="TextUtils"
  //         mode={mode}
  //         toggleMode={toggleMode}
  //       />
  //       <Alert alert={alert}/>
  //       <div className="container my-3 ">
  //         <Switch>
  //           <Route exact path="/about">
  //             <About />
              
  //           </Route>
  //           <Route exact path="/">
  //             <Tform showAlert={showAlert} heading="Enter The Text to Analyze below" mode={mode}/>
  //           </Route>
  //         </Switch>
  //       </div>
  //     </Router>
  //   </>
  // );

return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Tform
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
);
}

export default App;
