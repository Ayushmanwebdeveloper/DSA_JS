function addUpTo(n) {
    let a =0;
    a= n*(n+1)/2
return a;
}
let z = performance.now();
addUpTo(1000);
let b = performance.now();
console.log(`TIme-${(b-z)/1000}`)
//O(1)