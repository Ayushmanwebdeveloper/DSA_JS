//validAnagram(aaz,zaa) return true
//(meoow) & (ooewm)
//obj strategy
function validAnagram(str1,str2) {
    let obj1={};
    let obj2={};
    if (!(str1.length==str2.length)) {
        return false
    }
    for (let i = 0; i < str1.length; i++) {
        if (obj1[str1[i]]) {
            obj1[str1[i]]++
        }
         else if (!obj1[str1[i]]) {
            obj1[str1[i]] =1;
        }
    }

    
     for (let i = 0; i < str2.length; i++) {
        if (obj2[str2[i]]) {
            obj2[str2[i]]++
        }
         else if (!obj2[str2[i]]) {
            obj2[str2[i]] =1;
        }
    }

for (let key in obj1) {
 if(!(key in obj2)){
     return false;
 }
}
for (let key in obj1) {
 if(!(obj1[key]==obj2[key])){
     return false;
 }
}
    return true;
}