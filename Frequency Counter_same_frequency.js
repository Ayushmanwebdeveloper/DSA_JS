function sameFrequency(num1,num2){
 /*sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false*/
    let obj1={};
    let obj2={};
     let arr1 =String(num1).split('');
     let arr2 =String(num2).split('');
     arr1.forEach(e=>{
      obj1[e]?(obj1[e]++):(obj1[e]=1)
     });

 arr2.forEach(e=>{
      obj2[e]?(obj2[e]++):(obj2[e]=1)
     });
 console.log(obj1);
  console.log(obj2);
 for(key in obj1){
  if(!(key in obj2)){
   return false
  }
  
 }
 for(key in obj1){
  if(!(obj1[key]==obj2[key])){
   return false
  }
  
 }
 return true;
}