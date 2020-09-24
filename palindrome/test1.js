

function isPalindrome(str){
    let s=str.split("").reverse().join("");
   if(s===str) return "true";
   else return "false";
}


console.log(isPalindrome("Anna"));