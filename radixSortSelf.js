function radixSort(nums) {
    function getDigit(num,i) {
return Math.floor(Math.abs(num)/Math.pow(10,i))%10;        
    }
    function digitCount(num) {
if(num===0) return 1;
return Math.floor(Math.log10(Math.abs(num)))+1;
    }
   function mostDigits(arr) {
        let darr=[];
       arr.forEach(e=>{
           darr.push(digitCount(e));
       })
    console.log(darr);
    return Math.max(...darr);
       
    }


         let maxDigitCount = mostDigits(nums);
        for (let i = 0; i < maxDigitCount; i++){
        let digitBuckets=Array.from({length:10}, ()=>[]);
         for (let j = 0; j < nums.length; j++) {
          digitBuckets[getDigit(nums[j],i)].push(nums[j]);  
         } 
            nums=[].concat(...digitBuckets);
        }
    
    return nums;
}