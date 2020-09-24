//let num=12345;
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

console.log(reversedNum(-112345));


