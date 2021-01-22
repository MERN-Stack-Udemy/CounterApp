
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp />', () => {
  
  // test('debe mostrar el mensaje "Hola soy German"', () => {
  //   const greet = 'Hola soy German';
  //   const {getByText} = render( <PrimeraApp greet="German" years={23} /> );
  //   expect( getByText( greet )).toBeInTheDocument;
  // })
  
  test('deve mostrar <PrimeraApp /> correctamente', () => {
    const greet = 'Hola soy German';
    const years = 23;
    const wrapper = shallow( <PrimeraApp greet = { greet } years = { years } /> );

    expect(wrapper).toMatchSnapshot();

  })

  test('deve mostrar el idioma del articulo', () => {
    const greet = 'Hola soy German';
    const years = 23;
    const language = "ES"
    const parrafolanguage = `este articulo esta en el language ${language}`

    const wrapper  = shallow(
      <PrimeraApp 
          greet= {greet} 
          years= {years} 
          language={language} 
      />
    );
    const testpParrafo = wrapper.find('#language').text()
    // console.log(testpParrafo)
    expect( testpParrafo ).toBe ( parrafolanguage)
  })
  
  
})
