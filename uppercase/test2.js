function capital(str){
    let input=str.split(" ");
    let arr1="";
    arr1=input.map((s)=>{
       return ((s.substring(0,1)).toUpperCase());
      //  arr1=arr1+s
    });
return arr1;
}

console.log(capital("hello world i am here"));