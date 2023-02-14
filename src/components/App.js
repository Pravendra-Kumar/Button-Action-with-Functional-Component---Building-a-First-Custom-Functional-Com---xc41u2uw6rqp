import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {


  const [show, setPara] = useState(false);

   function updatePara(){
    setPara(true);
   }

  return (
    <div id="main">
      {show && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button id ="click" onClick={updatePara}>add</button>
    </div>
  );
}


export default App;
