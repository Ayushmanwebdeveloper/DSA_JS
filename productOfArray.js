// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
    let arr1=arr;
    let product=1;
    arr1.forEach((e)=>{
product=product*e;
        
    }
        
    )
    return product;
}