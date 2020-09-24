function reverseString(s){
    let str=s.split("");
    let revString="";
    for(i=str.length-1;i>=0;i--){
revString+=str[i];
    }
    return revString;
}

console.log(reverseString("hello"));
