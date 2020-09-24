function reverseString(s){
    let str =s.split("");
    let n=str.length;
    let i=0;
    let revString="";
    while(i<n){
        revString+=str.pop();
        i++;
    }
    return revString;
}

console.log(reverseString("hello"));
