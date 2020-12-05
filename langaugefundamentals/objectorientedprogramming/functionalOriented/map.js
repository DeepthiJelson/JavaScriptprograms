
let arr=[1,2,3,4,5];

let square = arr.map((no1)=>no1**2)
console.log(square)

let cube = arr.map((no1)=>no1**3);
console.log(cube)

let even=arr.filter((no1)=>no1%2==0)
console.log(even)

let odd=arr.filter((no1)=>no1%2!=0)
console.log(odd)

let sum = arr.reduce((no1,no2)=>no1+no2)
console.log(sum)

let high=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(high);

let srt=arr.sort((i,j)=>i-j)//ascending order
console.log(srt)
let desc=arr.sort((i,j)=>j-i)//decsending order
console.log(desc)