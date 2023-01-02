function countUniqueValues(arr){
   //[-2,-1,-1,0,1]-4
let ptr1=0;
let ptr2=arr.length-1;
let count=0;    
    while ( !(ptr1==arr.length)){
    console.log(ptr1);
    console.log(ptr2);
    console.log(arr);    
    console.log(`Now Count is ${count}`)
       if (!(ptr1==ptr2) && !(arr[ptr1]==arr[ptr2])) {
            ptr2--
            
        }
       else if(ptr1==ptr2){
          ptr2--
       }
       
       else if(!(ptr1==ptr2) && arr[ptr1]==arr[ptr2]) {
           console.log(`Now Removing${arr[ptr2]}`)
            arr.splice(ptr2,1);
            ptr2--;
            
        }
        
        if(ptr2==0){
            count++;
            ptr1++;
           ptr2=arr.length-1;
        }
        
    }
    return count;
}