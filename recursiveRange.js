function recursiveRange(n) {
   // SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
 if (n===1) {
     return 1;
 }
  return n+recursiveRange(n-1);  
}