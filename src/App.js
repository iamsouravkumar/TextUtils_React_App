import './App.css';
import Navbar from './components/Navbar';
import propTypes from 'prop-types'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0e101a'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled!", "success");

    }
    else if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled!", "success");

    }
    else {
      setMode('')
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} mode={mode} />
      <TextForm heading="Try TextUtils - Manipulate your Text in one Place." mode={mode} showAlert={showAlert} />
      {/* <About mode={mode}/> */}
      {/* <Router>
<Navbar title="TextUtils2" about="About Us" mode={mode} toggleMode={toggleMode}/>
  <div className='my-container'>
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
          <Route exact path ="/contact"></Route>
          <Route exact path ="/home"></Route>
        </Switch>
        </div>
        </Router> */}
    </>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  about: propTypes.string
}

export default App;
