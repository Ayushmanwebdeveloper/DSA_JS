function bubbleSort(arr) {
//[1,2,7,3,15,11,4,16,13]
for (let i = arr.length-1; i>=0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j]>arr[j+1]) {
          [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }  
    }
}
    return arr;
    
}