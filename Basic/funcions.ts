// Named funcion

function add(a: number, b: number): number {
    return a + b;
  }
console.log(add(5, 3)); // Output: 8


// Anonymus Funcion

const subtract = function (a: number, b: number): number {
    return a - b;
  };
console.log(subtract(10, 6)); // Output: 4


// Arow Funcion

const multiply = (a: number, b: number): number => a * b;
console.log(multiply(4, 7)); // Output: 28


// Funcion Type

type Operation = (a: number, b: number) => number;

const divide: Operation = (a, b) => a / b;
console.log(divide(20, 4)); // Output: 5


// Optional Parameters

function greet(name: string, age?: number): string {
    return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
  }
console.log(greet("Alice")); // Output: Hello Alice
console.log(greet("Bob", 30)); // Output: Hello Bob, age 30


// Defalut Parameters 

function power(base: number, exponent: number = 2): number {
    return base ** exponent;
  }
console.log(power(5)); // Output: 25
console.log(power(5, 3)); // Output: 125


// Rest Parameter 

function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// Funcion oveloading

function display(value: string): void;
function display(value: number): void;
function display(value: string | number): void {
  console.log(`Value: ${value}`);
}
display("Hello"); // Output: Value: Hello
display(123); // Output: Value: 123


// Generic Funcion 

function identity<T>(value: T): T {
    return value;
  }
  console.log(identity<number>(42)); // Output: 42
  console.log(identity<string>("TypeScript")); // Output: TypeScript


// Asynchronius Funcion 

async function fetchData(url: string): Promise<string> {
    const response = await fetch(url);
    return response.text();
  }
  // Usage
  // fetchData('https://api.example.com').then(console.log); 


// Class Method 

class Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  }
  const calc = new Calculator();
  console.log(calc.add(10, 15)); // Output: 25


// Immediately Invoked Function Expressions (IIFE)

(function greet(): void {
    console.log("Hello, TypeScript!");
})(); // Output: Hello, TypeScript!


// static Method in classes

class Utility {
    static square(num: number): number {
      return num * num;
    }
  }
console.log(Utility.square(4)); // Output: 16


// Higher order function 

function createMultiplier(multiplier: number): (value: number) => number {
    return (value) => value * multiplier;
  }
  const double = createMultiplier(2);
  console.log(double(10)); // Output: 20


// Recursive function 

function factorial(n: number): number {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }
  console.log(factorial(5)); // Output: 120