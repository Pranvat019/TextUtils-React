// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Form from './components/Form';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';



function App() {

  //We now want to manage the state of our complete application from "app.js".
  const [mode,setMode] = useState('light')

    const toggleMode = () => {
      if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode has been enabled", "success")
      }
      else {
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enabled", "success")
      }
};
  
const [alert, setAlert] = useState(null)

const showAlert = (message, type) => {
  setAlert({
      msg: message,
      ty:type
  })

  setTimeout(() =>{
       setAlert(null)
  },1500)

  }
  


  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert}/>
    <div className="container my-3"><Form showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/></div>
    {/* <About /> */}
    </>
  );
}

export default App;
