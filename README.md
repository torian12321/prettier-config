# Config Prettier

Propylon shared configuration to use with [Prettier](https://prettier.io/).

## Usage

To use Prettier rules in your project, follow [usage Examples](./README.md)

## Properties

### Line length and wrapping

> [printWidth](https://prettier.io/docs/options.html#print-width): 80

> [proseWrap](https://prettier.io/docs/options.html#prose-wrap): 'preserve'

### Indentation

> [tabWidth](https://prettier.io/docs/options.html#tab-width): 2

> [useTabs](https://prettier.io/docs/options.html#tabs): false

### Quotes

> [singleQuote](https://prettier.io/docs/en/options.html#quotes): true

<!-- prettier-ignore-start -->
```js
/** ❌ bad */
import someCode from "customLibrary";

const sayHy = () => {
  return "Hello User";
};
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```js
/** ✅ good */
import someCode from 'customLibrary';

const sayHy = () => {
  return 'Hello User';
};
```
<!-- prettier-ignore-end -->

> [quoteProps](https://prettier.io/docs/options.html#quote-props): 'as-needed'

<!-- prettier-ignore-start -->
```js
const obj = {
  normal: 'value',
  'needs-quotes': 'value',  // Quoted because of hyphen
  '123': 'value'            // Quoted because it's a number
};
```
<!-- prettier-ignore-end -->

### Spacing

> [bracketSpacing](https://prettier.io/docs/en/options.html#bracket-spacing): true

<!-- prettier-ignore-start -->
```js
/** ❌ bad */
obj = {foo: bar}

/** ✅ good */
obj = { foo: bar }
```
<!-- prettier-ignore-end -->

> [bracketSameLine](https://prettier.io/docs/options.html#bracket-line): false

<!-- prettier-ignore-start -->
```js
/** ❌ bad */
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}>
  Click Here
</button>

/** ✅ good */
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}
>
  Click Here
</button>
```
<!-- prettier-ignore-end -->

### Commas and semicolons

> [trailingComma](https://prettier.io/docs/en/options.html#trailing-commas): 'all'

<!-- prettier-ignore-start -->
```js
/** ❌ bad */
obj = {
  hello: 'hello',
  world: 'world'
}

/** ✅ good */
obj = {
  hello: 'hello',
  world: 'world', // <-- trailing comma on last element
}
```
<!-- prettier-ignore-end -->

> [semi](https://prettier.io/docs/options.html#semicolons): 'preserve'

<!-- prettier-ignore-start -->
```js
/** ❌ Before prettier */
const name = 'John'
console.log(name)

/** ✅ After prettier */
const name = 'John';
console.log(name);
```
<!-- prettier-ignore-end -->

### Arrow functions

> [arrowParens](https://prettier.io/docs/en/options.html#arrow-function-parentheses): 'avoid'

<!-- prettier-ignore-start -->
```js
/** ❌ bad */
const myFunction = (userName) => {
  return `Hello ${userName}`;
};

/** ✅ good */
const myFunction = userName => {
  return `Hello ${userName}`;
};
```
<!-- prettier-ignore-end -->

## JSX Properties

> [jsxSingleQuote](https://prettier.io/docs/en/options.html#jsx-quotes): true

<!-- prettier-ignore-start -->
```jsx
/** ❌ bad */
import React from "react";
import "./button.css";

const Button = () => {
  return (
    <button type="button" className="btn-styles">
      Click
    </button>
  );
};
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
/** ✅ good */
import React from 'react';
import './button.css';

const Button = () => {
  return (
    <button type='button' className='btn-styles'>
      Click
    </button>
  );
};
```
<!-- prettier-ignore-end -->

> [jsxBracketSameLine](https://prettier.io/docs/options.html#deprecated-jsx-brackets): false

> [singleAttributePerLine](https://prettier.io/docs/options.html#single-attribute-per-line): false

## Line endings

> [endOfLine](https://prettier.io/docs/options.html#end-of-line): 'lf'
