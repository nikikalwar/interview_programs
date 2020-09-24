function reverseString(s){
    let str =s.split("");
    let n=str.length;
    let reverseString="";
   for(let char of str){
       reverseString=char+reverseString;
      // console.log(reverseString)
   }
    return reverseString;
}

console.log(reverseString("hello"));
