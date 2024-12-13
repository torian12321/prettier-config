# Config Prettier

Shared configuration to use with [Prettier](https://prettier.io/).

## Installation

Add prettier config to your app/package as a dependency by running the command:

```sh
npm install @torian12321/prettier-config --save-dev
```

Recommendation, setup Visual Studio Code to [format on save.](https://www.codementor.io/@myogeshchavan97/how-to-automatically-format-code-in-visual-studio-code-using-prettier-1nebhfbxak#automatically-format-code-on-file-save)

## Usage

In your `package.json`:

```json
{
  "name": "my-library",
  "version": "1.0.0",
  "prettier": "@torian12321/prettier-config"
}
```

If you don't want to use your package.json, alternatively create a `.prettierrc.json` file in your project's root directory.

```
"@torian12321/prettier-config"
```

## Properties

<!-- prettier-ignore-start -->
> [arrowParens](https://prettier.io/docs/en/options.html#arrow-function-parentheses): 'avoid'

```js
/** ❌ bad */
const myFunction = (userName) => {
  return `Hello ${userName}`;
};
```

```js
/** ✅ good */
const myFunction = userName => {
  return `Hello ${userName}`;
};
```

> [singleQuote](https://prettier.io/docs/en/options.html#quotes): true

```js
/** ❌ bad */
import someCode from "customLibrary";

const sayHy = () => {
  return "Hello User";
};
```

```js
/** ✅ good */
import someCode from 'customLibrary';

const sayHy = () => {
  return 'Hello User';
};
```

> [trailingComma](https://prettier.io/docs/en/options.html#trailing-commas): 'all'

```js
/** ❌ bad */
obj = {
  hello: 'hello',
  world: 'world'
}
```

```js
/** ✅ good */
obj = {
  hello: 'hello',
  world: 'world', // <-- trailing comma on last element
}
```

> [bracketSpacing](https://prettier.io/docs/en/options.html#bracket-spacing): true

```js
/** ❌ bad */
obj = {foo: bar}
```

```js
/** ✅ good */
obj = { foo: bar }
```
<!-- prettier-ignore-end -->

## JSX Properties

<!-- prettier-ignore-start -->

> [jsxSingleQuote](https://prettier.io/docs/en/options.html#jsx-quotes): true

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
