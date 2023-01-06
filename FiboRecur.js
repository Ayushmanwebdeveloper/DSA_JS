// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
    let arr=[1,1];
    for (let i = 2; i <= n; i++) {
     arr[i]=arr[i-1]+arr[i-2]; 
    }
    

return arr[n-1]
}