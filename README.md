
#  1. TypeScript Union and Intersection Types

## What are Union Types?

A **union type** allows a variable to be one of several types. You define union types using the pipe (`|`) symbol.

### Example:

```typescript
// A variable that can be either a string or a number
let value: string | number;

value = "Hello";  // valid
value = 42;       // valid
// value = true;  // Error: Type 'boolean' is not assignable to type 'string | number'
```

---

## What are Intersection Types?

An **intersection type** combines multiple types into one. The resulting type has all the properties of the intersected types. You define intersection types using the ampersand (`&`) symbol.

### Example:

```typescript
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

// The type 'Staff' must have both name and employeeId properties
type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Alice",
  employeeId: 123,
};
```

---

## Full Example Using Both Union and Intersection Types

```typescript
interface Admin {
  admin: true;
  privileges: string[];
}

interface User {
  name: string;
  age: number;
}

// Intersection type: AdminUser must have all properties of Admin and User
type AdminUser = Admin & User;

const adminUser: AdminUser = {
  admin: true,
  privileges: ["create-server"],
  name: "Bob",
  age: 35,
};

// Union type: this function accepts either a string or a number
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(`ID as string: ${id.toUpperCase()}`);
  } else {
    console.log(`ID as number: ${id}`);
  }
}

printId("abc123");
printId(101);
```

---

## Summary

- **Union types (`|`)** allow a value to be one of multiple types.
- **Intersection types (`&`)** combine multiple types into one with all their properties.
  


#  2. TypeScript `keyof` Keyword

## What is `keyof`?

The `keyof` operator takes an object type and produces a union of its keys as string literal types.

It helps in creating **type-safe** utilities and functions that operate on keys of objects.

---

## Basic Example

```typescript
interface Person {
  name: string;
  age: number;
  location: string;
}

type PersonKeys = keyof Person; 
// Equivalent to: "name" | "age" | "location"

let key: PersonKeys;

key = "name";     // valid
key = "age";      // valid
key = "location"; // valid
// key = "email"; // Error: Type '"email"' is not assignable to type 'PersonKeys'
```

---

## Using `keyof` in Functions

You can constrain function parameters to only valid keys of a given type.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "Alice",
  age: 30,
  location: "Wonderland",
};

const name = getProperty(person, "name");     // Type: string
const age = getProperty(person, "age");       // Type: number
// const email = getProperty(person, "email"); // Error: Argument of type '"email"' is not assignable to parameter of type 'keyof Person'
```

---

## Benefits of `keyof`

- Provides **compile-time safety** for object keys.
- Enables building **generic** and reusable utilities.
- Helps avoid common bugs related to invalid property access.

---



