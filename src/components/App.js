import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {


  const [para, setPara] = useState("");
  console.log(para);

   function updatePara(){
    setPara(para +  "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
    console.log(para);
   }

  return (
    <div id="main">
      <p id="para">{para}</p>
      <button id ="click" onClick={updatePara}>add</button>
    </div>
  );
}


export default App;
