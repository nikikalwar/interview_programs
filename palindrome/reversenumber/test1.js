function reverseInt(int){
    let revString=int.toString().split("").reverse("").join("");
     return parseInt(revString);
}

var output=reverseInt(12345);

console.log(output);