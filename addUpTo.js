function addUpTo(n) {
    let a = 0;
    for (let index = 1; index <= n; index++) {
        a = a+index;
    }
console.log(a);
return a;
    
}

let z = performance.now();
addUpTo(1000);
let b = performance.now();
console.log(`TIme-${(b-z)/1000}`)
//O(n)