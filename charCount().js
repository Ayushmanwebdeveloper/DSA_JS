function charCount(s) {
    //returning an object
    //loop over string
    //covert string to lowercase
    //create object
    //if key exists increment value & if not add key
let str = s.toLowerCase();
let obj ={};
for (let index = 0; index < str.length; index++){
 let a = str[index]
if (obj[a]>0) {
  obj[a]++
}   
  
else{
  obj[a]=1;
};

}

    return obj;
}    

    