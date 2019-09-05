import React from 'react';
import './Display.css';

function Display(props) {
  
    return (
      <div className="container">
        <section className="display">
            <h2 className="balls_text">Balls</h2>
            <div className="balls_props">{props.balls}</div>
            <h2 className="strikes_text">Strikes</h2>
            <div className="strikes_props">{props.strikes}</div>
        </section>

      </div>
    );
  }
  
  export default Display;
  