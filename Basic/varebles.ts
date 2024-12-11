// Declaration

let mutableVar: number = 10;
const immutableVar: string = "Hello";
// var is discouraged, but it exists:
var globalScopedVar: boolean = true;


// Adnotation

let namee: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;
let anything: any = "Can be anything"; // Avoid using `any` unless necessary


// Type Inferance

let greeting = "Hi"; // TypeScript infers this as string
let count = 42; // TypeScript infers this as number


// Unin Type

let id: number | string;
id = 101; // valid
id = "A123"; // also valid


// Array

let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
// Tuples
let personn: [number, string] = [1, "Alice"];


// Enumes

enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  
let move: Direction = Direction.Up;


//  Object 

let userr: { id: number; name: string } = { id: 1, name: "Alice" };



//  Type Aliases and Interfaces

type User = { id: number; name: string };
let user: User = { id: 1, name: "Alice" };

interface Product {
  id: number;
  name: string;
  price: number;
}
let product: Product = { id: 101, name: "Laptop", price: 1500 };

// Const 

const PI: number = 3.14;

//  Dictionary

const dictionary: { [key: string]: number } = {
  key1: 10,
  key2: 20,
};

dictionary["key3"] = 30; // Add a new key-value pair
console.log(dictionary["key1"]); // Access a value: 10




const map = new Map<string, number>();

map.set("key1", 10); // Add key-value pairs
map.set("key2", 20);

console.log(map.get("key1")); // Access a value: 10
console.log(map.has("key3")); // Check if a key exists: false
map.delete("key2"); // Remove a key-value pair

for (const [key, value] of map) {
  console.log(`${key}: ${value}`); // Iterate over keys and values
}




type Dictionary<T> = { [key: string]: T };

const stringDict: Dictionary<string> = {
  key1: "value1",
  key2: "value2",
};

const numberDict: Dictionary<number> = {
  key1: 10,
  key2: 20,
};

console.log(stringDict["key1"]); // Output: value1
console.log(numberDict["key2"]); // Output: 20
