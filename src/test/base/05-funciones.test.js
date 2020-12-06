const { getUser, getUsuarioActivo} = require("../../base/05-funciones");

describe( "pruebas en 05-funciones", () => {
  
  test('getUser debe devolver un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect ( user ).toEqual( userTest );
  });

  // getUsuarioActivo(_nombre_) debe devolver un objeto con el nombre

  test('getUsuarioActivo(_nombre_) debe devolver un objeto con el nombre', () => {
    
    const nombre = "job";
    const user = getUsuarioActivo(nombre);

    expect( user ).toEqual( {
      uid: 'ABC567',
      username: nombre
    } );
  })
  
  
})