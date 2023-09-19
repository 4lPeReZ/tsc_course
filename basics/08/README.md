# Object-Oriented Programming in TypeScript

## Classes and Constructors

In TypeScript, classes are used as blueprints for creating objects. They encapsulate data and behavior. Constructors are special methods that initialize object instances when a class is instantiated.

```typescript
class Person {
  constructor(public name: string, public age: number) {}
}

const alice = new Person("Alice", 30);
```

## Access Modifiers: Public, Private, and Protected

- `public`: Members (properties and methods) with `public` access modifier can be accessed from anywhere.
- `private`: Members with `private` access modifier can only be accessed within the class that defines them.
- `protected`: Members with `protected` access modifier can be accessed within the class and its subclasses.

```typescript
class Employee {
  private id: number;
  protected salary: number;
}
```

## Inheritance

In TypeScript, you can create subclasses that inherit properties and methods from a parent class.

```typescript
class Manager extends Employee {
  constructor(id: number, salary: number) {
    super();
    this.id = id; // private property of Employee
    this.salary = salary; // protected property of Employee
  }
}
```

## Function Calls from Subclasses and Superclasses

Subclasses can call methods from their superclass using the `super` keyword.

```typescript
class Animal {
  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    super.makeSound(); // Calls the makeSound method of the superclass
    console.log("Woof!");
  }
}
```

## Getters and Setters

Getters and setters allow controlled access to class properties.

```typescript
class Circle {
  private _radius: number;

  get radius() {
    return this._radius;
  }

  set radius(value: number) {
    if (value >= 0) {
      this._radius = value;
    }
  }
}
```

## Static Methods and Properties

Static methods and properties are associated with the class itself rather than instances of the class.

```typescript
class MathUtils {
  static PI = 3.14;

  static calculateArea(radius: number) {
    return this.PI * radius * radius;
  }
}

const area = MathUtils.calculateArea(5);
```

## Abstract Class

An abstract class is a class that cannot be instantiated and is meant to be subclassed. It may contain abstract methods that must be implemented by its subclasses.

```typescript
abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
```

## Private Constructors

Private constructors prevent the instantiation of a class from outside the class itself.

```typescript
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true
```

These are some of the fundamental OOP concepts in TypeScript, including classes, constructors, access modifiers, inheritance, function calls between subclasses and superclasses, getters and setters, static methods and properties, abstract classes, and private constructors. Understanding these concepts is essential for building well-structured and maintainable TypeScript applications.