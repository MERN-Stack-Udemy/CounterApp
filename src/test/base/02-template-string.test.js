import { getSaludo } from '../../base/02-template-string'

describe( 'pruebas de 02-template-string', () => {
  
  test( 'getSaludo( _nombre_ ) debe devolver -Hola +nombre!', () => {
    
    const nombre = 'luigi';
    const saludo = getSaludo(nombre);
    expect( saludo ).toBe( 'Hola '+nombre+"!" );
  
  });

  // getSaludo debe devolver 'hola Carlos!' si no hay argumneto nombre
  test( 'getSaludo()sin argumento debe devolver - Hola Carlos!', () => {
    
    const saludo = getSaludo();
    expect( saludo ).toBe( 'Hola Carlos!' );
  
  });
  
});