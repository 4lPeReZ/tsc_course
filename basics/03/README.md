## Basic Types in TypeScript

TypeScript has several basic types that are used to define variables and functions.

### Boolean Type

The `boolean` type is used to represent a logical value that can be either `true` or `false`.

```tsx
let myBoolean: boolean = true;

```

### Number Type

The `number` type is used to represent numeric values, including integers and floating-point numbers.

```tsx
let myNumber: number = 42;

```

### String Type

The `string` type is used to represent textual data, such as words or sentences.

```tsx
let myString: string = "Hello World";

```

### Void Type

The `void` type is used to represent the absence of a value. It is often used as the return type of functions that do not return a value.

```tsx
function myFunction(): void {
  console.log("This function does not return a value");
}

```

### Any Type

The `any` type is used to represent any JavaScript value. When a variable is declared with the `any` type, it can be assigned any value without generating a type error. The `any` type is often used when the developer does not know the type of a value or when the value can be of any type.

```tsx
let myVariable: any = "Hello World";
myVariable = 42;
myVariable = true;

```

### Arrays

Arrays are used to store a collection of values of the same type. In TypeScript, arrays can be declared using the square bracket notation.

```tsx
let myArray: number[] = [1, 2, 3, 4, 5];

```

### Tuples

Tuples are used to store a collection of values of different types. In TypeScript, tuples can be declared using parentheses and commas.

```tsx
let myTuple: [number, string] = [1, "Hello"];

```

### Enum

Enum is a data type that represents a group of related constants. In TypeScript, enums are declared using the `enum` keyword.

```tsx
enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Red;

```

### Never

The `never` type represents a value that will never occur. It is used to represent functions that always throw an error or never return.

```tsx
function throwError(): never {
  throw new Error("Error!");
}

```

### Null and Undefined

`null` and `undefined` are used to represent the absence of a value. In TypeScript, they are their own types.

```tsx
let myNull: null = null;
let myUndefined: undefined = undefined;

```

### Examples

```tsx
let myBoolean: boolean = true;
let myNumber: number = 42;
let myString: string = "Hello World";
let myVariable: any = "Hello World";
let myArray: number[] = [1, 2, 3, 4, 5];
let myTuple: [number, string] = [1, "Hello"];
enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Red;

function throwError(): never {
  throw new Error("Error!");
}

let myNull: null = null;
let myUndefined: undefined = undefined;

```