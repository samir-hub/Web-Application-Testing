import React from 'react';
import { useState } from "react";
import Display from "./Display"

export const addStrike = currentStrikes => {
    let result = currentStrikes +1; 
    if(result < 3){
      return result;
    }else {
      return 0;
    }
  };
  
  export const addBall = currentBalls => {
    let result = currentBalls +1; 
    if(result < 4){
      return result;
    }else {
      return 0;
    }
  };

function Dashboard(props) {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
  
    const addFoul = num => {
      if (strikes===0 || strikes===1){
        return num +1;
      }else {
        return num+0; 
      }
    };
    const addStrike = currentStrikes => {
        let result = currentStrikes +1; 
        if(result < 3){
          return result;
        }else {
            setBalls(0);
          return 0;
        }
      };
      
    const addBall = currentBalls => {
        let result = currentBalls +1; 
        if(result < 4){
          return result;
        }else {
            setStrikes(0);
          return 0;
        }
      };
  
    return (
      <div className="container">
      <Display strikes={strikes} balls={balls}/>
        <section>
          <div>
            <button onClick={() => setStrikes(addStrike(strikes))}>Strike</button>
            <button onClick={() => setBalls(addBall(balls))}>Ball</button>
          </div>
          <div>
            <button onClick={() => setStrikes(addFoul(strikes))} data-testid="foul">Foul</button>
            <button onClick={function someFunc() {setStrikes(0);setBalls(0);}}>Hit</button>
          </div>
        </section>
      </div>
    );
  }
  
  export default Dashboard;
  