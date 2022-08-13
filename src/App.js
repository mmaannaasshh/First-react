// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState('light');


  return (
    <>
      <Navbar title="Man" Abouttxt="About Us" />
      {/* <Navbar /> */}
      <div className="container mb-3">

      <TextForm heading="Enter text to analysis below"/>
      {/* <About/> */}
      </div>

    </>
  );
}

export default App;
