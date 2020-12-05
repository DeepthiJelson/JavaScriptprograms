var num = 7;
var flag = 0;
for (var i = 2; i<num; i++)
{
    if( num % i == 0)
    {
        flag = 1;
        break;

    }

}
if( !flag)
console.log("prime number");
else
console.log("not prime number");