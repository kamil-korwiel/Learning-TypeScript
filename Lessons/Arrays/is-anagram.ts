let s = "racecar"; 
let t = "carrace";

function isAnagramSort(s:String, t:String){
    let tot = t.split("").sort();
    let sos = s.split("").sort();

    console.log(tot)
    console.log(sos)

    return tot.join() === sos.join();
}

// TODO Need to debug  
function isAnagramHashMap(s:String, t:String){
    const hashmap: Map<String,number> = new Map();
    const length_s = s.length 
    const length_t = t.length 

    if (length_t !== length_s) return false;

    for (let i=0;i<length_s;i++) {
        if (hashmap.has(s[i])) {
            let num:number = hashmap.get(s[i])!;
            // console.log("s{ " + s[i] + " : " + num +" }")
            hashmap.set(s[i],num++);
        }else{
            hashmap.set(s[i],1)
            // console.log("ss{ " + s[i]+ " " + 1 + " }")
        }
        if (hashmap.has(t[i])) {
            let num:number = hashmap.get(t[i])!;
            // console.log("t{ " + t[i] + " : " + num +" }")
            hashmap.set(t[i],num--);

        }else{
            hashmap.set(t[i],-1)
            // console.log("tt{ " + t[i]+ " " + -1 + " }")
        }
    }
    console.log("")
    for (const [ _, v ] of hashmap){
        console.log(v)
        // if (v !== 0) {
        //     return false
        // }
    }
    // return true
    
}


console.log(isAnagramSort(s,t))
console.log(isAnagramHashMap(s,t))