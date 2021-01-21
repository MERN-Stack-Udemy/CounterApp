import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
  
  test('debe mostrar el mensaje "Hola soy German"', () => {
    const saludo = 'Hola soy German';
    
    const {getByText} = render( <PrimeraApp saludo="German" edad={23} /> );

    expect( getByText( saludo )).toBeInTheDocument;
  
  })
  
})
