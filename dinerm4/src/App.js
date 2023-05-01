import React, { Component } from "react";
import Navbar from "./Components/nav/Navbar";
import FirstSection from './Components/FirstSection'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FirstSection/>
      </div>
    );
  }
}
