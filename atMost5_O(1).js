function atMost5(n) {
    console.log(`Logging ${n}`)
for (let index = 0; index <= Math.min(5,n); index++){
  
    console.log(index)  
}
}
atMost5(10);
atMost5(4);
//O(1)