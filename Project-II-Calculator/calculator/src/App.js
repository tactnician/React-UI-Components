import React from 'react';
import './App.css';

const App = () => {

  const Calculator = {
    display: [],
    numberPad:{
      zero: '0',
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9',
    },
    operators:{
      add: ()=>{},
      subtract: ()=>{},
      multiply: ()=>{},
      divide: ()=>{},
    }
  }
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;


{/* <div className = "output">
  <CalculatorDisplay />
</div>
<div className = "input">
  <div className ="" ></div>

</div> */}