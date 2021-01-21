// import { api_key } from '../../giphy/api_key'
import {getImagen} from '../../base/11-async-await'

describe('Pruebas con Async - Await fetch', () => {
  
  test('debe retornar el url de la imagen ', async () => {
    const url = await getImagen();
    // console.log(url)
    expect( url.includes('https://') ).toBe( true )
  })
  
})
