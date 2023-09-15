## Functions and Objects in TypeScript

### Function Basics

In TypeScript, functions are a fundamental part of the language. You can define functions to encapsulate reusable code blocks. Functions can accept parameters and return values. Here's a basic function in TypeScript:

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message = greet("John");
console.log(message); // Output: Hello, John!
```

### Required Parameters

By default, function parameters in TypeScript are required, meaning you must provide values for them when calling the function. In the `greet` function above, `name` is a required parameter.

### Optional Parameters

You can make function parameters optional by adding a `?` after the parameter name. Optional parameters can be omitted when calling the function.

```typescript
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello!";
    }
}

const message1 = greet();     // Output: Hello!
const message2 = greet("John"); // Output: Hello, John!
```

### Default Parameters

You can also provide default values for parameters, which are used when a value is not provided during the function call.

```typescript
function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

const message1 = greet();     // Output: Hello, Guest!
const message2 = greet("John"); // Output: Hello, John!
```

### Rest Parameters

When you want to work with a variable number of arguments, you can use rest parameters. Rest parameters allow you to capture multiple arguments into an array.

```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

const result = sum(1, 2, 3, 4, 5); // Result: 15
```

### Function Type

In TypeScript, you can define function types, which describe the shape of a function. This is useful when working with higher-order functions or interfaces.

```typescript
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));      // Result: 8
console.log(subtract(8, 2)); // Result: 6
```

These are the fundamental concepts related to functions and objects in TypeScript. Understanding them will help you write clean and maintainable code in TypeScript.