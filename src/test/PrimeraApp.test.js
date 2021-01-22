
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp />', () => {
  
  // test('debe mostrar el mensaje "Hola soy German"', () => {
  //   const saludo = 'Hola soy German';
  //   const {getByText} = render( <PrimeraApp saludo="German" edad={23} /> );
  //   expect( getByText( saludo )).toBeInTheDocument;
  // })
  
  test('deve mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola soy German';
    const edad = 23;
    const wrapper = shallow( <PrimeraApp saludo = { saludo } edad = { edad } /> );

    expect(wrapper).toMatchSnapshot();

  })

  test('deve mostrar el idioma del articulo', () => {
    const saludo = 'Hola soy German';
    const edad = 23;
    const idioma = "ES"
    const parrafoIdioma = `este articulo esta en el idioma ${idioma}`

    const wrapper  = shallow(
      <PrimeraApp 
          saludo= {saludo} 
          edad= {edad} 
          idioma={idioma} 
      />
    );
    const testpParrafo = wrapper.find('#idioma').text()
    // console.log(testpParrafo)
    expect( testpParrafo ).toBe ( parrafoIdioma)
  })
  
  
})
