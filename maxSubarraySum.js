function maxSubarraySum(arr, num) {
    //([2,6,9,2,1,8,5,6,3],3)
    let maxSum=0;
    let tmpSum=0;
    for (let index = 0; index < num; index++){
        maxSum+=arr[index];
        
    }
    
    tmpSum=maxSum;
    
    for (let i = num; i < arr.length; i++){
        tmpSum=maxSum - arr[i - num] + arr[i];
        maxSum=Math.max(tmpSum,maxSum);
    }
    return maxSum;
}