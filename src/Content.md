# Curso React de cero a experto (Hooks y MERN Stak) 

> Here I will highlight the most important aspects that I saw in section 4 and 5 of the *Udemy* [React zero to expert course](https://www.udemy.com/course/react-cero-experto/) by *Fernando Herrera.*

These are the issues I want to highlight:
_to clarify that this is not my first experience with react but I also did one in platzy that I put on Gitgub pages and you can see it [here]()_

* **Prop-Types**
* **Default Props**
* **Introdution to test usin Jest**
* **Introdution to test usin Enzyme**

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

[_official react documentation_](https://reactjs.org/docs/typechecking-with-proptypes.html)
