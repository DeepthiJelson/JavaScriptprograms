var arr=[12,6,13,5,7];
for(var i=0;i<arr.length;i++)
{
    for( var j=i;j<arr.length;j++)
    {
        var temp = 0;
        if(arr[i]>arr[j])
        {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        }
    }
}
console.log(arr);
var lower = 0;
var upper = arr.length-1;
var element = 12;
while(lower<upper)
{
    var total = arr[lower] + arr[upper];
    if(total == element)
    {
        console.log(arr[lower],arr[upper]);
        break;
    }
    else if(total>element)
    upper = upper-1;
    else if(total<element)
    lower = lower+1;
}