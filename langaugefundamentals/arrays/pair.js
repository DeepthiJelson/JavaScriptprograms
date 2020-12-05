var item=[ 3,1,6,4];
var num = 7;
for( let i=0; i<item.length; i++)
{
    for( var j=i+1; j<(item.length); j++)
    {
        var sum = item[i]+item[j];
        if( sum == 7)
        {
            console.log(item[i], item[j]);  
              
        }
    }
}