var item= [1,2,3,4,5,6,7];
var element = 6;
var flag = 0;
var lower = 0;
var upper = item.length-1;

while( lower<upper)
{
    var mid = Math.floor((lower+upper)/2);
    if(element>item[mid])
    {
        lower = mid +1;
    }
    else if(element<item[mid])
    {
        upper = mid -1;
    }
    else if(element == item[mid])
    {
        flag += 1;
        break;
    }
}
if( flag == 0)
{
    console.log("element not found")
}
else{
    console.log("element found")
}