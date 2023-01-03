function averagePair(arr, avg){
  // add whatever parameters you deem necessary - good luck!
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false
  let ptr1=0;
  let ptr2=arr.length-1;
   for (let i = 0; i < arr.length;i++ ){
       let avg1=(arr[ptr1]+arr[ptr2])/2;
       if (avg1==avg) {
           return true
       }
           else if (avg1<avg){
               ptr1++
           }
       else{
           ptr2--
           
       }
   }
}