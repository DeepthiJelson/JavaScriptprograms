var arr=[14,20,35,10,67];
var sum=0;
for( i of arr)
{
    sum = sum + i;
}
console.log(sum);
for( i of arr)
{
    if( i%2 != 0)
    {
        console.log(i);
    }
}
//To insert an element at the end of the array 
arr.push(8);
console.log(arr);
arr.pop();
//to remove last element from the array
console.log(arr);