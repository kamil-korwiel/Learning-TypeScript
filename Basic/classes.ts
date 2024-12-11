// Basic Class

class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet(): string {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  const person = new Person("Alice", 30);
  console.log(person.greet()); // Output: Hello, my name is Alice and I am 30 years old.
  


// Access Modifier 

class Employee {
    public name: string;
    private salary: number;
  
    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
  
    getSalary(): number {
      return this.salary;
    }
  }
  
  const emp = new Employee("Bob", 50000);
  console.log(emp.name); // Output: Bob
//   console.log(emp.salary); // Error: Property 'salary' is private
  console.log(emp.getSalary()); // Output: 50000


//   ReadOnly Properties

class Vehicle {
    readonly brand: string;
  
    constructor(brand: string) {
      this.brand = brand;
    }
  }
  
  const car = new Vehicle("Toyota");
  console.log(car.brand); // Output: Toyota
  // car.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property


// Getters and Setters

class Circle {
    private radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    get diameter(): number {
      return this.radius * 2;
    }
  
    set diameter(value: number) {
      this.radius = value / 2;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.diameter); // Output: 10
  circle.diameter = 14;
  console.log(circle.diameter); // Output: 14


//  Static Member 

class MathUtils {
    static PI: number = 3.14159;
  
    static square(num: number): number {
      return num * num;
    }
  }
  
  console.log(MathUtils.PI); // Output: 3.14159
  console.log(MathUtils.square(4)); // Output: 16

  
// Inheritance

class Animal {
    constructor(public name: string) {}
  
    move(): string {
      return `${this.name} is moving.`;
    }
  }
  
  class Dog extends Animal {
    bark(): string {
      return `${this.name} says Woof!`;
    }
  }
  
  const dog = new Dog("Buddy");
  console.log(dog.move()); // Output: Buddy is moving.
  console.log(dog.bark()); // Output: Buddy says Woof!


// Abstract Classes

abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
  }
  
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    area(): number {
      return this.width * this.height;
    }
  
    perimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  
  const rect = new Rectangle(5, 10);
  console.log(rect.area()); // Output: 50
  console.log(rect.perimeter()); // Output: 30
  

// Interfaces with Classes

interface Printable {
    print(): void;
  }
  
  class Book implements Printable {
    constructor(public title: string, public author: string) {}
  
    print(): void {
      console.log(`${this.title} by ${this.author}`);
    }
  }
  
  const book = new Book("1984", "George Orwell");
  book.print(); // Output: 1984 by George Orwell

// Generics in Classes

class Box<T> {
    private contents: T;
  
    constructor(contents: T) {
      this.contents = contents;
    }
  
    getContents(): T {
      return this.contents;
    }
  }
  
  const numberBox = new Box<number>(42);
  console.log(numberBox.getContents()); // Output: 42
  
  const stringBox = new Box<string>("Hello");
  console.log(stringBox.getContents()); // Output: Hello


// Method overrating 

class Calculatorr {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
      return a + b;
    }
  }
  
  const calcc = new Calculatorr();
  console.log(calcc.add(10, 20)); // Output: 30
  console.log(calcc.add("Hello", " World")); // Output: Hello World


// Private constructor and Singleton Classes

class Singleton {
    private static instance: Singleton;
  
    private constructor() {}
  
    static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }
  
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();
  console.log(singleton1 === singleton2); // Output: true


// Mixins

type Constructor<T = {}> = new (...args: any[]) => T;

function Flyable<T extends Constructor>(Base: T) {
  return class extends Base {
    fly() {
      console.log("Flying...");
    }
  };
}

function Swimable<T extends Constructor>(Base: T) {
  return class extends Base {
    swim() {
      console.log("Swimming...");
    }
  };
}

class Bird {}
class FlyingFish extends Flyable(Swimable(Bird)) {}

const fish = new FlyingFish();
fish.fly(); // Output: Flying...
fish.swim(); // Output: Swimming...
