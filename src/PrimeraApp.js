// import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ greet, years, language }) => {
  
  return (
    <>
      <h1>Hi i'm {greet} !!!</h1>
      <p>I have {years} years</p>
      <p id="language" >{language}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  greet : PropTypes.string.isRequired, 
  years : PropTypes.number.isRequired
}
PrimeraApp.defaultProps = {
  language: "ingles",
}

export default PrimeraApp;
