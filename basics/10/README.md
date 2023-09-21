# Namespaces, Modules, and Imports/Exports in TypeScript

In TypeScript, managing the organization and sharing of code is essential for building scalable and maintainable applications. Namespaces, modules, and import/export statements are crucial features that facilitate this organization. Additionally, tools like Webpack can help bundle and optimize your TypeScript code. Let's explore these concepts in detail.

## Namespaces

Namespaces are a way to group related code under a common name, preventing naming collisions. They are often used for structuring code in larger applications. Here's how to create and use a namespace in TypeScript:

```typescript
// Define a namespace
namespace Geometry {
  export const PI = 3.14159265359;

  export function calculateCircleArea(radius: number): number {
    return PI * radius * radius;
  }
}

// Access members of the namespace
const circleArea = Geometry.calculateCircleArea(5);
console.log(circleArea); // 78.53981633974483
```

In this example, we create a namespace called `Geometry` to encapsulate related constants and functions.

## Modules

Modules are a more modern way of organizing code in TypeScript, providing better code isolation and reusability. They are defined using the `import` and `export` keywords. 

### Exporting from a Module

```typescript
// MathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

// App.ts
import { add } from './MathUtils';

const result = add(5, 3);
console.log(result); // 8
```

In this example, the `add` function is exported from the `MathUtils` module and imported into the `App` module.

### Export Default

You can also export a default value from a module:

```typescript
// MathUtils.ts
export default function add(a: number, b: number): number {
  return a + b;
}

// App.ts
import add from './MathUtils';

const result = add(5, 3);
console.log(result); // 8
```

Here, the `add` function is exported as the default export, allowing you to import it without specifying a name.

## Using Webpack

Webpack is a powerful tool that bundles and optimizes your TypeScript code and its dependencies for production use. To use Webpack, you typically create a `webpack.config.js` file to configure the build process:

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/App.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
```

Here, we specify an entry point (`App.ts`) and an output file (`bundle.js`). We also configure TypeScript compilation using `ts-loader`.

Once the configuration is set up, you can use the `webpack` command to bundle your TypeScript code:

```bash
webpack
```

This command generates the bundled JavaScript file (`bundle.js`) in the specified output directory (`dist`).

In summary, namespaces, modules, and import/export statements in TypeScript provide a structured way to organize and share code. Webpack, along with TypeScript, helps bundle and optimize your code for efficient deployment in real-world applications.