import React from "react";
import Navbar from "./Components/navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {Originals,Action} from "./urls"

function App() {
  return (
<div className="App">
  <Navbar/>
  <Banner/>
  <RowPost url={Originals} title="Netflix Originals"/>
  <RowPost url={Action} title="Action" isSmall/>
</div>
  
  );
}

export default App;
