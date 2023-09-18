# TypeScript Objects and Functions

## Objects in TypeScript

In TypeScript, objects are a fundamental data structure used to represent and manipulate data. When working with objects, you can define strict types for their properties, specify specific types for individual properties, and even include methods.

### Strict Types in Objects

In TypeScript, you can define strict types for object properties using the colon (`:`) syntax. For example:

```typescript
const person: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};
```

Here, we define a strict type for the `person` object without using interfaces.

### Specific Types in Objects

You can specify specific types for individual properties within an object:

```typescript
const myCar: { make: string; model: string; year: number } = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};
```

In this example, each property of the `myCar` object has a specific type.

### Methods in Objects

Objects in TypeScript can also contain methods. Here's an example:

```typescript
const calculator: {
  add(a: number, b: number): number;
} = {
  add(a, b) {
    return a + b;
  },
};
```

Here, we define an object with an `add` method without using interfaces.

### Multiple Types in Objects

You can use union types to specify that a property can have multiple types:

```typescript
const userProfile: { id: string | number; username: string } = {
  id: "12345",
  username: "user123",
};
```

In this case, the `id` property can be either a string or a number.