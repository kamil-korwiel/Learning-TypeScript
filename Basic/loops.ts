for (let i = 0; i < 10; i++) {
    console.log(i);
}

const arr = [1, 2, 3];
for (const value of arr) {
    console.log(value);
}

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key as keyof typeof obj]); // Cast key to keyof typeof obj
}

for (const key of Object.keys(obj)) {
  console.log(key, obj[key as keyof typeof obj]); // Cast key
}




const objjj = { a: 1, b: 2, c: 3 };

// Using Object.entries for keys and values
for (const [key, value] of Object.entries(objjj)) {
  console.log(key, value); // Key is string, value is number
}






let countt = 0;
while (countt < 5) {
    console.log(countt);
    countt++;
}

let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);


const arrr = [1, 2, 3];
arr.forEach((value) => console.log(value)); // Iterates over elements
const doubled = arrr.map((value) => value * 2); // Creates a new array with modified values


function countdown(n: number): void {
    if (n <= 0) return;
    console.log(n);
    countdown(n - 1);
}
countdown(5);

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
for (const value of generateSequence()) {
    console.log(value);
}
