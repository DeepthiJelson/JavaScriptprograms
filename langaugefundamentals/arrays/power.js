var ar=[2,3,4];
var count = 1;
for ( let i of ar)
{
    i = i ** count;
    console.log(i);
    count+=1;
}