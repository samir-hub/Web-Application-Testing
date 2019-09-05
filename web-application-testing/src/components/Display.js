import React from 'react';

function Display(props) {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  
    return (
      <div className="container">
        <section className="scoreboard">
          <div className="topRow">
            <div className="home">
              <h2 className="home__name">Balls</h2>
  
              {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  
              <div className="home__score">{props.balls}</div>
            </div>
  
            <div className="away">
              <h2 className="away__name">Strikes</h2>
              <div className="away__score">{props.strikes}</div>
            </div>
          </div>
       
        </section>

      </div>
    );
  }
  
  export default Display;
  