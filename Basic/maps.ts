const map: Map<string, number> = new Map();

// Adding entries
map.set('one', 1);
map.set('two', 2);

// Accessing values
console.log(map.get('one')); // Output: 1

// Checking existence
console.log(map.has('two')); // Output: true

// Iterating through the map
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Removing an entry
map.delete('one');

// Clearing the map
map.clear();





type User = { id: number; name: string };

const userMap: Map<number, User> = new Map();

// Add users
userMap.set(1, { id: 1, name: 'Alice' });
userMap.set(2, { id: 2, name: 'Bob' });

// Access a user
const user = userMap.get(1);
if (user) {
  console.log(user.name); // Output: Alice
}




// ReadonlyMap

const readonlyMap: ReadonlyMap<string, number> = new Map([
    ['one', 1],
    ['two', 2],
]);

// readonlyMap.set('three', 3); // Error: Property 'set' does not exist on type 'ReadonlyMap'
console.log(readonlyMap.get('one')); // Output: 1





class UserStore {
    private users: Map<number, string> = new Map();

    addUser(id: number, name: string): void {
        this.users.set(id, name);
    }

    getUser(id: number): string | undefined {
        return this.users.get(id);
    }

    removeUser(id: number): void {
        this.users.delete(id);
    }

    listUsers(): void {
        this.users.forEach((name, id) => {
            console.log(`${id}: ${name}`);
        });
    }
}

const store = new UserStore();
store.addUser(1, 'Alice');
store.addUser(2, 'Bob');
store.listUsers(); // Output: 1: Alice, 2: Bob






const objKey = { id: 1 };
const arrKey = [1, 2, 3];

const advancedMap: Map<object, string> = new Map();
advancedMap.set(objKey, 'Object Key');
advancedMap.set(arrKey, 'Array Key');

console.log(advancedMap.get(objKey)); // Output: Object Key
console.log(advancedMap.get(arrKey)); // Output: Array Key





const objj = { a: 1, b: 2, c: 3 };
const mapp = new Map(Object.entries(objj));
console.log(mapp); // Output: Map { 'a' => 1, 'b' => 2, 'c' => 3 }




const arrayOfMaps: Map<string, number>[] = [
    new Map([['one', 1]]),
    new Map([['two', 2]]),
];

// Accessing elements
arrayOfMaps[0].set('three', 3);
console.log(arrayOfMaps[0].get('three')); // Output: 3




const mappp = new Map([
    ['z', 1],
    ['a', 3],
    ['m', 2],
]);

const sortedEntries = [...mappp.entries()].sort(([keyA], [keyB]) =>
    keyA.localeCompare(keyB)
);
console.log(new Map(sortedEntries)); // Output: Map { 'a' => 3, 'm' => 2, 'z' => 1 }
