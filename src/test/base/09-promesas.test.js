import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/Heroes';

describe('pruebas con promesas', () => {
  
  test('getHeroeByIdAsync(_ID_) debe retornar un heroe - async', ( done ) => {

    const ID = 1; 
    getHeroeByIdAsync(ID)
      .then( heroe => {

        expect( heroe ).toBe( heroes[0] );
        
        done();
      })
    
  })

  test('getHeroeByIdAsync(_ID_) debe retornar un error si el ID no existe', ( done ) => {
    const ID = 6;
    getHeroeByIdAsync(ID)
      .catch (err => {
        expect( err ).toBe('No se pudo encontrar el héroe');
        done();
      })
    
    
  })
  
  
})
