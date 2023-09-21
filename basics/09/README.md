# Interfaces

In TypeScript, interfaces play a crucial role in defining the shape and structure of objects, classes, functions, and more. They help ensure that different parts of your code work together seamlessly by providing a contract that outlines what properties and methods an entity must have. This markdown document will cover the basics of interfaces, interface methods, implementing interfaces in classes, and using interfaces for functions.

## Basic Interface

An interface in TypeScript is defined using the `interface` keyword followed by a name and a set of properties and method signatures. Here's an example of a basic interface for a `Person`:

```typescript
interface Person {
  name: string;
  age: number;
}
```

In this interface, we specify that any object implementing the `Person` interface must have `name` and `age` properties.

## Interface's Methods

Interfaces can also define method signatures. Here's an example of an interface that requires an object to have a `greet` method:

```typescript
interface Greeting {
  greet(): string;
}
```

Now, any object that claims to implement the `Greeting` interface must provide a `greet` method that returns a string.

## Interfaces into Classes

Classes in TypeScript can implement interfaces to ensure they adhere to a specific contract. When a class implements an interface, it must provide implementations for all the properties and methods defined in that interface.

```typescript
interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
```

In this example, the `Circle` class implements the `Shape` interface, which mandates the presence of the `calculateArea` method. The class provides an implementation for this method, ensuring it conforms to the contract specified by the interface.

## Interfaces for Functions in TypeScript

Interfaces can also be used to describe the shape of functions. This is especially useful when you want to define the expected parameters and return types for functions.

```typescript
interface Calculator {
  (a: number, b: number): number;
}

const add: Calculator = (a, b) => a + b;
const subtract: Calculator = (a, b) => a - b;
```

In this example, we define an interface `Calculator` that represents a function taking two numbers as parameters and returning a number. We then declare two functions, `add` and `subtract`, that match this interface.

By adhering to the `Calculator` interface, we ensure that these functions have the expected parameter types and return values.

Interfaces are a powerful tool in TypeScript for ensuring code correctness, reusability, and maintainability. They provide a way to define contracts that various parts of your codebase can follow, promoting consistency and reducing the likelihood of errors.

## Interface for Arrays

You can use interfaces to describe the structure of arrays. For example, if you have an array of `Person` objects, you can define an interface for it like this:

```typescript
interface Person {
  name: string;
  age: number;
}

interface PeopleArray extends Array<Person> {}

const people: PeopleArray = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

// Now, 'people' is an array of objects that match the 'Person' interface.
```

In this example, the `PeopleArray` interface extends the built-in `Array` type and specifies that it contains elements conforming to the `Person` interface.

## Interface for Objects with Nested Properties

Interfaces can also describe objects with nested properties. For instance, if you have data representing a company's employee structure:

```typescript
interface Employee {
  id: number;
  name: string;
}

interface Department {
  name: string;
  employees: Employee[];
}

const salesDepartment: Department = {
  name: "Sales",
  employees: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
};

// 'salesDepartment' is an object that conforms to the 'Department' interface.
```

In this example, the `Department` interface specifies that an object should have a `name` property, which is a string, and an `employees` property, which is an array of objects conforming to the `Employee` interface.

## Generic Interfaces

Generic interfaces allow you to create flexible and reusable interfaces that work with different data types. Here's an example of a generic interface for a key-value store:

```typescript
interface KeyValueStore<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): void;
  remove(key: K): void;
}

// Usage
const numberStore: KeyValueStore<string, number> = {
  data: {},
  get(key: string) {
    return this.data[key];
  },
  set(key: string, value: number) {
    this.data[key] = value;
  },
  remove(key: string) {
    delete this.data[key];
  },
};

numberStore.set("one", 1);
numberStore.set("two", 2);
console.log(numberStore.get("one")); // 1
```

In this example, the `KeyValueStore` interface is generic, allowing you to specify the types for keys (`K`) and values (`V`) when you implement it. This makes it adaptable to different data structures.

Using interfaces for complex structures helps ensure that your data conforms to a specific shape, enhancing type safety and code readability in TypeScript.