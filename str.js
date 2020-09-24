let str = "hello";
//let str = require('readline');
//const io = require('console-read-write');
//reverseString(str);
function reverseString(s) {
    let strArr = s.split("");
    //strArr.reverse();
  //  return strArr.join("");

 /* let revString="";
  for(i=str.length-1;i >=0;i--){
      revString=revString+str[i];
  }
  return revString;
  }
  */
 let revString="";
 revString=strArr.forEach(char => {
revString=char+revString; 

 });
return revString;
}

console.log(reverseString(str));


