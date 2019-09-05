import React from 'react';
import { useState } from "react";
import './App.css';
import Dashboard from "./components/Dashboard";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score
  

  return (
    <div className="container">
      <Dashboard/>
    </div>
  );
}

export default App;
