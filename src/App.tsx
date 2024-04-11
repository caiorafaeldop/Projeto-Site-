//import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import NavBar from "./components/NavBar/NavBar";
// import Card from "./components/Card/Card";
import SignIn from "./components/Sign-in/sign-in";
function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="myAppContainer">
        <div>
          <SignIn />
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default App;
