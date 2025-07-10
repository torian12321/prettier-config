# Usage

## Environment Setup

To the root of your project, add `.npmrc` file with the given content:

```sh
# .npmrc
#
# Custom registry for @torian12321 packages.
@torian12321:registry=https://npm.pkg.github.com
```

## Installation

Add prettier config to your app/package as a dependency by running the command:

```sh
npm install prettier @torian12321/prettier-config --save-dev
```

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

## Recommendation

Setup Visual Studio Code to [format on save.](https://www.codementor.io/@myogeshchavan97/how-to-automatically-format-code-in-visual-studio-code-using-prettier-1nebhfbxak#automatically-format-code-on-file-save)
