function binarySearch(arr,s) {
let ptr1=0;
let ptr2=arr.length-1;
let mid=  Math.floor((ptr1+ptr2)/2);

while (arr[mid]!==s && ptr1<=ptr2) {
   if (s<arr[mid]) {
       ptr2=mid-1;
   } 
    
  else if(s==arr[mid]){
    return mid;
}
    else if(s>arr[mid]){
        ptr1=mid+1;
    }
    mid=Math.floor((ptr1+ptr2)/2)
}
    if(s==arr[mid]){
    return mid;
}
    return false;
    
}