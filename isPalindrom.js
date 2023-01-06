// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
let str1=str.split('').reverse().join('');
 if (str==str1) {
     return true
     
 }   
    return false
}