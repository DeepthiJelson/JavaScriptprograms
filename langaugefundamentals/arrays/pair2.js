var arr = [1, 2, 3, 4,5];
var element = 6;
var low = 0;
var upp = arr.length - 1;
while (low < upp) 
{
    var total = arr[low] + arr[upp];
    if (total == element) 
    {
        console.log(arr[low], arr[upp]);
    }
    low+=1;
}
