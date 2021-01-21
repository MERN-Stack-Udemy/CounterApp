// import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, edad, idioma }) => {
  
  return (
    <>
      <h1>Hola soy {saludo}</h1>
      <p>att. Net Flanders y tengo {edad} anios</p>
      <p>este articulo esta en el idioma {idioma}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo : PropTypes.string.isRequired, 
  edad : PropTypes.number.isRequired
}
PrimeraApp.defaultProps = {
  idioma: "ingles",
}

export default PrimeraApp;
