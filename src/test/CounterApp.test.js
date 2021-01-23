import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Test sobre <CounterApp />', () => {

  let wrapper = shallow( <CounterApp value = {10} /> );

  beforeEach( () => {
    wrapper = shallow( <CounterApp value = {10} /> );
  });

  test('snapshot de counterApp', () => {
    
    // const wrapper = shallow( <CounterApp value = {value} /> );
    expect(wrapper).toMatchSnapshot();
  })
  
  test('validar el text del elemento renderizado acorde a `value`', () => {
    const value = 100;
    const renderValueParrafo = `Value : ${value}`
    const wrapper = shallow( <CounterApp value = {value} /> );
    const valueParrafo = wrapper.find('h2').text();
    expect( valueParrafo ).toBe( renderValueParrafo );
  })

  test('debe cambiar el valor en -1 al precionar el boton ', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text()
    // console.log(counterText)
    expect( counterText ).toBe("Value : 9")
  })
  
  test('debe cambiar el valor en +1 al precionar el boton ', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text()
    // console.log(counterText)
    expect( counterText ).toBe("Value : 11")
  })

  test('Debe volver al valor por inicial al presionar reset', () => {
    const wrapper = shallow( <CounterApp value = {105} /> );
    
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    let counterText = wrapper.find('h2').text()
    // console.log(counterText);
    wrapper.find('button').at(1).simulate('click');
    counterText = wrapper.find('h2').text()
    expect( counterText ).toBe("Value : 105")
  })
  

})
