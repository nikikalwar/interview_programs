function reverseString(str){
    let s=str.split("");
    let reversedString="";
    s.forEach(char=>{
        reversedString=char+reversedString;
    });
    console.log(s);
    return reversedString;
}
console.log(reverseString("hello"));