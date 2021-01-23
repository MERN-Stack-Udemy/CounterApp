import React, { useState } from 'react'
import PropTypes from 'prop-types';

function CounterApp( {value = 12} ) {
  
  const [ counter, setCounter ] = useState(value);

  const handdleAdd = () => setCounter( (c) => c + 1 );

  const handdleReset = () => setCounter(value);

  const handdleSub = () => setCounter(counter - 1);


  return (
    <div>
      <h1>Counter App</h1>
      <h2>Value : {counter}</h2>
      <button onClick={ () => handdleSub("SUB") } >-1</button>
      <button onClick={ () => handdleReset("RESET") } >RESET</button>
      <button onClick={ () => handdleAdd("ADD") } >+1</button>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp
