describe("Pruebas del archivo Demo.test.js", () => {
  
  test('deben de ser iguales los string', () => {
    // 1. Inicializacion
    const mesaje = 'hola mundo';
    // 2. estimulo
    const mensaje2 = `hola mundo`;
    // 3. observar el comportamiento
    expect(mesaje).toBe(mensaje2); // ===
  });

});