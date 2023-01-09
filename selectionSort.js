function selectionSort(arr) {
    for (let i = 0;i <= arr.length-1; i++) {
let lowest=i;
        for (let j = i+1; j < arr.length; j++){
            
        if (arr[j]<arr[lowest]) {
            lowest=j;
        }
            
        }
        [arr[lowest],arr[i]]=[arr[i], arr[lowest]];
    }
    return arr;
    
}