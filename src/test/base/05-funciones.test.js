const { getUser } = require("../../base/05-funciones");

describe( "pruebas en 05-funciones", () => {
  
  test('getUser debe devolver un objeto', () => {
    const userTest = {
      uid: 1235,
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect ( user ).toEqual( userTest );
  });

})