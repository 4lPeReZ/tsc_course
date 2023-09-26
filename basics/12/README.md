# Decorators in TypeScript

**Decorators** in TypeScript are a powerful and flexible way to add metadata and behavior to classes, methods, properties, and parameters. They are often used to enhance or modify the behavior of the code elements they decorate. Decorators provide a mechanism for applying aspects, annotations, or custom functionality to your TypeScript code. 

## Decorators for Classes

You can use decorators to modify class definitions. They are applied just before a class declaration, as shown below:

```typescript
@decorator
class MyClass {
  // Class members and methods
}
```

## Default Decorators

TypeScript includes a set of built-in decorators for common use cases, such as `@class`, `@method`, `@property`, and `@parameter`. These default decorators can be applied to classes, methods, properties, and function parameters to alter their behavior or add metadata.

## Examples of Decorators

### Decorators for Classes

```typescript
function logClass(target: Function) {
  console.log('Class Name: ' + target.name);
}

@logClass
class ExampleClass {
  // Class members and methods
}
```

In this example, the `logClass` decorator logs the name of the class to the console.

### Decorators for Methods

```typescript
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method ${key} called with arguments ${args}`);
    return originalMethod.apply(this, args);
  };
}

class ExampleClass {
  @logMethod
  greet(name: string) {
    return `Hello, ${name}!`;
  }
}
```

The `logMethod` decorator logs information before and after the method `greet` is called, allowing you to modify or extend the method's behavior.

### Decorators for Properties

```typescript
function readOnly(target: any, key: string) {
  Object.defineProperty(target, key, {
    writable: false,
  });
}

class ExampleClass {
  @readOnly
  propertyName: string = 'Read-Only Property';
}
```

The `readOnly` decorator prevents changes to the `propertyName` property by making it read-only.

### Decorators for Parameters

```typescript
function logParameter(target: any, key: string, index: number) {
  console.log(`Parameter ${index} in ${key} of ${target.constructor.name}`);
}

class ExampleClass {
  greet(@logParameter name: string) {
    return `Hello, ${name}!`;
  }
}
```

The `logParameter` decorator logs information about the parameter `name` used in the `greet` method.

## Decorators as Higher-Order Functions

Decorators can be used as higher-order functions, taking additional configuration parameters, and returning functions that act as decorators. This allows you to create more flexible and configurable decorators.

```typescript
function repeat(n: number): MethodDecorator {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      for (let i = 0; i < n; i++) {
        originalMethod.apply(this, args);
      }
    };
  };
}

class ExampleClass {
  @repeat(3) // Repeats the method call 3 times
  sayHello() {
    console.log('Hello, world!');
  }
}
```

In this example, the `repeat` decorator is a higher-order function that takes a number `n` and returns a method decorator that repeats the method call `n` times.

Decorators in TypeScript provide a powerful way to enhance and customize your code. They are especially useful for aspect-oriented programming, metaprogramming, and creating reusable and maintainable code. You can use default decorators or create custom decorators to suit your specific needs and requirements.