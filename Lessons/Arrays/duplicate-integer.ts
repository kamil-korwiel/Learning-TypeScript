
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const lengthh:number = 1000000 
const randomNumbers = Array.from({ length: lengthh }, () => getRandomInt(1, 100000000)); // Random numbers between 1 and 100
// const randomNumbers = Array.from({ length: lengthh }, (_, i) => i)
// console.log(randomNumbers);



const array_numbers: number[] = [1,2,3,4,5]

function hasDuplicate(nums:number[]) {
    const hashmap: Map<number,number> = new Map();
    let found = false
    nums.forEach(function (num:number) {
        if (hashmap.has(num)){
            found = true
            return
        }else{
            hashmap.set(num,1)
        }
    });
    return found
}

function hasDuplicateSet(nums:number[]) {
    const set_of_nums: Set<number> = new Set()
    let found = false
    nums.forEach(function (num:number) {
        if (set_of_nums.has(num)){
            found = true
            return
        }else{
            set_of_nums.add(num)
        }
    });
    return found
}

function hasDuplicateSort(nums:number[]) {
    const ascending = nums.sort((a,b) => a-b)
    
    const len = ascending.length;
    for (let i = 0; i < len-1; i++) {
        if (ascending[i] == ascending[i+1]){
            return true
        }
    }
    return false
}

function hasDuplicateSome(nums:number[]) {
    const ascending = nums.sort((a,b) => a-b)
    let found = false
    found = ascending.some(( _, index, array) => {
        return index > 0 && array[index] === array[index - 1];
    })
    return found
}


console.time("hasDuplicate")
console.log(hasDuplicate(randomNumbers))
console.timeEnd("hasDuplicate")

console.time("hasDuplicateSet")
console.log(hasDuplicateSet(randomNumbers))
console.timeEnd("hasDuplicateSet")

console.time("hasDuplicateSort")
console.log(hasDuplicateSort(randomNumbers))
console.timeEnd("hasDuplicateSort")

console.time("hasDuplicateSome")
console.log(hasDuplicateSome(randomNumbers))
console.timeEnd("hasDuplicateSome")