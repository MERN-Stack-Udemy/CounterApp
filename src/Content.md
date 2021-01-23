# Curso React de cero a experto (Hooks y MERN Stak) 

> Here I will highlight the most important aspects that I saw in section 4 and 5 of the *Udemy* [React zero to expert course](https://www.udemy.com/course/react-cero-experto/) by *Fernando Herrera.*

These are the issues I want to highlight:
_to clarify that this is not my first experience with react but I also did one in platzy that I put on Gitgub pages and you can see it [here]()_

* **Prop-Types**
* **Default Props**
* **Getting starting with Testing**
* **Starting to test using Enzyme**

```jsx
import PropTypes from 'prop-types';

const FristApp = ({ greet, years, language }) => {
  return (
    <>
      <h1>Hi i'm {greet}!</h1>
      <p>I have {years} years</p>
      <p id="language" >{language}</p>
    </>
  );
};

FristApp.propTypes = {
  greet : PropTypes.string.isRequired, 
  years : PropTypes.number.isRequired
};

FristApp.defaultProps = {
  language: "English",
};

export default FristApp;
```

### propTypes 

Exports a range of validators that we casn use to make sure of the information we receive, if an invalid value is assiggned to a prop a warning is show in the console

_los `propTypes` solo se verifican en modo desarrollo_

Some of the validators provided:

* `optionalArray: PropTypes.array,` 
* `optionalBool: PropTypes.bool,`
* `optionalFunc: PropTypes.func,`
* `optionalNumber: PropTypes.number,`
* `optionalObject: PropTypes.object,`
* `optionalString: PropTypes.string,`
* `optionalSymbol: PropTypes.symbol,`
* `optionalElement: PropTypes.element,`

You can chain any of the above with `isRequired` to make sure a warning is shown if the prop isn't provided.

```jsx
optionalNumber: PropTypes.number.isRequired,
```

### defaultProps

Define default values for your props by assigning to the special defaultProps property:

```jsx
FristApp.defaultProps = {
  greet: 'Tortie',
  years: 22,
  language: "English",
};
```

an alternative to:

```jsx
const FristApp = ({ greet='Tortie', years, language='Spanish' }) => {
  // Component code
}
```

[_'Typechecking With PropTypes' react documentation_](https://reactjs.org/docs/typechecking-with-proptypes.html)

### Getting starting with Testing

File name and directory for testing: `src/test/ComponentName.test.js`

__Testing file structure:__

```jsx
// imports

describe ( 'title describing the tests that the file performs on a component', () => {

  test( 'describe whitch component feature is tested in the block', () => {
    // testing the component feature
  });
  // ...
  // other tests
});
```

`describe(...)` shows a title for to all tests into test file, sould express 'in general terms' the tests on a Component.

We can check if a rendered component contains a text using `expect(_expected_).toBeInTheDocument`

```jsx
test('must shoe the greeting', () => {
  const greet = 'Milo'
  const greetMessage = `Hi i'm ${greet}!`;
  // destructuring wrapper
  const {getByText} = render ( <FristApp greet={greet} years={23} /> );
  expect( getByText( greet )).toBeInTheDocument;
});
```

This is a example for a `Hello World`, we can also test methods of a component such as the following:

```jsx
test('should debe retornar un array de [string,  number', () => {
  
  const [ letters, numbers ] = returmSomeArray();

  expect(letters).toBe('ABC');
  expect(typeof letters).toBe( 'string');

  expect(numbers).toBe(123);
  expect(typeof numbers).toBe( 'number');
  
})
```

- `toBe('ABC')` tests that `letters` is equal to `ABC`
- `toBe( 'string')` only test if it's of type `sting`

Testing methods that return a promise

```jsx
import { getHeroeByIdAsync } from 'path/to/file.js'
import heroes from '../data/Heroes';

describe( '...', () => {

  test('getSomeHeroeByIdAsync(_ID_) returns some a heroe - async', ( done ) => {

  const ID = 1; 
  getHeroeByIdAsync(ID)
    .then( heroe => {
      expect( heroe ).toBe( heroes[0] );
      done();
    })
  })
})
```

> If done() is never called, the test will fail (with timeout error), which is what you want to happen. If the expect statement fails, it throws an error and done() is not called. If we want to see in the test log why it failed, we have to wrap expect in a try block and pass the error in the catch block to done. Otherwise, we end up with an opaque timeout error that doesn't show what value was received by expect(data). [jestjs.io](https://jestjs.io/docs/en/asynchronous)

Testing methods using `asyng - await`

```jsx
import { getImagen } from '../async-await'

test('debe retornar el url de la imagen ', async () => {
  const url = await getImagen();
  expect( url.includes('https://') ).toBe( true )
})
```

_not the best example_

### Starting test using Enzyme

Today the enzyme adapter is only available for react version <= 16 and the current version and rely on a external adapter from [wojtekmaj github](https://github.com/wojtekmaj/enzyme-adapter-react-17)

If you already find the adapter in the [official documentation of enzyme](https://enzymejs.github.io/enzyme/) follow the enzyme installations


```sh
npm i --save-dev enzyme
```

and the adapter

```sh
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
```

Now configure enzyme to use the adapter you want it to use 

file: `src/setupTests.js`

```jsx
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
```

If you have an error woth the enzyme adapter try run the following command:

```sh
npm install --legacy-peer-deps --save-dev @wojtekmaj/enzyme-adapter-react-17
```

I will test the following component:

```jsx
import React, { useState } from 'react'
import PropTypes from 'prop-types';

function CounterApp( {value = 12} ) {
  
  const [ counter, setCounter ] = useState(value);

  const handdleAdd = () => setCounter( (c) => c + 1 );
  const handdleReset = () => setCounter(value);
  const handdleSub = () => setCounter(counter - 1);

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Value : {counter}</h2>
      <button onClick={ () => handdleSub() } >-1</button>
      <button onClick={ () => handdleReset() } >RESET</button>
      <button onClick={ () => handdleAdd() } >+1</button>
    </div>
  )
}

CounterApp.propTypes = {  value: PropTypes.number.isRequired, }

export default CounterApp
```

We will use shallow for the rendering of the Component

```jsx
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Test about <CounterApp />', () => {
  test(`validate the text of the rendered component with a given 'value'`, () => {
    const value = 100;
    const renderValue = `Value : ${value}`
    const wrapper = shallow( <CounterApp value = {value} /> );
    const paragraphValue = wrapper.find('h2').text();
    expect( paragraphValue ).toBe( renderValue );
  })
}
```


Note that we use `fint('_element_').text()` to _fint_ tha element `h2`.

As there is only once `h2` element in the Component, we have no problem to access it, but if there are more `h2` elements or others, the `fint(..)` method will **return an array**, in the order they appear in the `Component.js` file from top to bottom.

We can be more specific by the using the `fint(..)` method when accessing by the class: `fint('.className')` or id: `fint('#idElement')`

An example for accessing the elements of an array would be to try to access the buttons

```jsx
test('increase the counter value by one', () => {
  const wrapper = shallow( <CounterApp value = {15} /> );
  wrapper.find('button').at(2).simulate('click');
  const counterText = wrapper.find('h2').text()
  expect( counterText ).toBe("Value : 11")
})
``` 

We will use `wrapper.find('button').at(2).simulate('click')` to simulate simulate click event for increase the counter that is a `hook`, we use `.at(_index_)` to access the button at a position in the array returned by `fint()` and `simulate('click')` simulates `'click'` event.

```jsx
<button onClick={ ... } >-1</button>  // .at(0)
<button onClick={ ... } >RESET</button> // .at(1)
<button onClick={ ... } >+1</button>  // .at(2)
```

Something that is repeated in every test is `const wrapper = shallow( <CounterApp value = {15} /> )` we cloud declare it outsite the test and inside the `describe` scope and only declare it in the test that require, in thos case, a specific `value` to be tested

```jsx
describe('Test sobre <CounterApp />', () => {
  let wrapper = shallow( <CounterApp value = {15} /> );;
  
  test('increase the counter value by one', () => {
  const valueParrafo = wrapper.find('h2').text();
    // test code ... 
}
// all test ...
```

But this can cause problems in testing because everyone can access the wrapper and make modifications that we have to consider

Let's use `beforeEach()`

```jsx
describe('Test sobre <CounterApp />', () => {
  // inside of describe scope 
  let wrapper = shallow( <CounterApp value = {10} /> );

  beforeEach( () => {
    wrapper = shallow( <CounterApp value = {10} /> );
  });

  test('..' , => {
    // test code
  })
```

