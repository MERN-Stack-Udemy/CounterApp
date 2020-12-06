import React, { useState } from 'react'
import PropTypes from 'prop-types';

function CounterApp( {value = 12} ) {
  
  const [ counter, setCounter ] = useState(value);

  const handdleAdd = () => setCounter( (c) => c + 1 );

  const handdleReset = () => setCounter(value);

  const handdleSub = () => setCounter(counter - 1);
  
  const handdleCounter = ( type ) => {
    switch(type){
      case "ADD": setCounter( (c) => c + 1 ); break;
      case "SUB": setCounter(counter - 1); break;
      case "RESET": setCounter(value); break;
      default:;
    }
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Value : {counter}</h2>
      <button onClick={ () => handdleCounter("SUB") } >-1</button>
      <button onClick={ () => handdleCounter("RESET") } >RESET</button>
      <button onClick={ () => handdleCounter("ADD") } >+1</button>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
  //value: 23
}


export default CounterApp
