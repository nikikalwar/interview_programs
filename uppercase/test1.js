/*  program to capitalize the first letter after space

step 1.get input 
step 2.at index 0 ==>capitalize
step3:at index of space ,i++, toUppperCase();
step 4:check if lowercase -->convert to uppercase
new method:use substring method to return a character as string and convert it to uppercase using the inbuilt functions
and replace each character of the string after space-->Achieved by split(" ")
map performs iteration on each element of the array amd returns new array

*/

function capital(str){
    let input=str.split(" ");
    let arr1="";
    arr1=input.map((s)=>{
       return s.replace((s.substring(0,1)),((s.substring(0,1)).toUpperCase()));
      //  arr1=arr1+s
    });
return arr1;
}

console.log(capital("hello world i am here"));