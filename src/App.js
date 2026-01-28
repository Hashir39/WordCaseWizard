import Navbar from "./components/Navbar";
import './App.css';
import TextForm from "./components/textform";
import React, { useState } from "react";
// import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";
// import {
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been Enabled', "success");
      document.title = ('TextUtils - Dark Mode')

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light  mode has been Enabled', "success");
      document.title = ('TextUtils - Light Mode')

    }
  }





  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" */}
            <TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode}/>
            {/* </Route>
          </Routes>
        
      </Router>
    
    </> */}
     </div>
     </>
  );

}

export default App
