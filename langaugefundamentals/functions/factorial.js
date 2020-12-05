//function with argument and no return value
function factorial(num)
{
    var fact = 1;
    while(num>=1)
    {
        fact = fact * num;
        num--;

    }
    console.log(fact);
}
factorial(5);