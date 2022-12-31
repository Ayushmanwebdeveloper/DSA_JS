function countUpAndDown(n) {
console.log("Going Up");
for (let i = 0; i <= n; i++) {
    console.log(i);
}
console.log("At Top\nAnd Going Down...");
    
for (let j = n-1; j >= 0; j--) {
console.log(j);
}
console.log("Back Down")    
}
countUpAndDown(10)