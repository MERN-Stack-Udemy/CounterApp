import  { getHeroeById } from "../../base/08-imp-exp";
import  heroes from "../../data/Heroes";

describe('08-imp-exp.test funciones de Heroes ', () => {

  test('debe devolver un hero por ID ', () => {
    
    const ID = 4;
    const hero = getHeroeById( ID );
  
    expect( hero ).toEqual( {
      id: 4,
      name: 'Flash',
      owner: 'DC'
    });
  })

  test('debe devolver el heroe con el ID, si existe ', () => {
    
    const ID = 4;
    const hero = getHeroeById( ID );
    const heroData = heroes.find( h => h.id === ID );
    
    expect( hero ).toEqual( heroData );
  })
  
  test('debe devolver Undefined si el ID NO existe ', () => {
    
    const ID = 56;
    const hero = getHeroeById( ID );
    
    expect( hero ).toBe( undefined );
  })
  
})
