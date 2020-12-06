const { retornaArreglo } = require("../../base/07-deses-arr")

describe('pruebas 07-desestructuracion de arrays', () => {
  
  test('should debe retornar un array de [string,  number]', () => {
    
    // const arr = retornaArreglo();
    // expect(arr).toEqual( ['ABC', 123] );
    
    const [ letras, numeros ] = retornaArreglo();
    expect(letras).toBe('ABC');
    expect(typeof letras).toBe( 'string');
    /**
     * .toBe(123) = evalua que sea de tipo 'number' y ademas que sea 123
     * toBe( 'number') SOLO evalua que sea de tipo 'number'
     */
    expect(numeros).toBe(123);
    expect(typeof numeros).toBe( 'number');
    
  })
  
})
