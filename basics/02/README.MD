## 01 - Introduction to TypeScript

TypeScript is a strongly typed, object-oriented programming language that is designed to be a superset of JavaScript. TypeScript provides developers with the ability to write more maintainable and scalable code by adding features such as classes, interfaces, and modules to the language.

### Hello World in TypeScript

To write a "Hello, World!" application in TypeScript, follow these steps:

1. Install TypeScript on your machine using npm.
2. Create a new file called `hello.ts`.
3. Add the following code to the `hello.ts` file:

```tsx
console.log("Hello, World!");

```

1. Open a terminal window, navigate to the directory where `hello.ts` is located, and run the following command:

```bash
tsc hello.ts

```

1. This will compile the TypeScript code into JavaScript. You should now see a new file called `hello.js` in the same directory.
2. Run the `hello.js` file using the following command:

```bash
node hello.js

```

You should see "Hello, World!" printed to the console.

### What is `tsconfig.json`?

`tsconfig.json` is a configuration file for TypeScript projects. It provides the compiler with information about the project's structure and settings. For example, it can specify the target ECMAScript version, the output directory for compiled JavaScript files, and which files should be included in the compilation process.

### Observer Mode

The observer mode is a design pattern used in object-oriented programming. It allows an object, called the subject, to notify a group of other objects, called observers, when its state changes. In TypeScript, the observer mode can be implemented using interfaces and classes.