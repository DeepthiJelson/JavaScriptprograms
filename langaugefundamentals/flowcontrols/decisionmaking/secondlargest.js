var num1=12, num2= 15, num3=13;
if((num1<num2 & num1>num3) | (num1>num2 & num1<num3))
{
    console.log( "second largest number is " +num1);
}
else if((num2<num1 & num2>num3) | ( num2>num1 & num2<num3))
{
    console.log( "Second largest number is " +num2);
}
else if((num3<num1 & num3>num2) | ( num3>num1 & num3<num2))
{
    console.log(" Second largest number is "+num3);
}