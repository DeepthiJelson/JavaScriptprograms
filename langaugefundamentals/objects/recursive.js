var pattern = "ABABBAC"
var dict={};
for( ch of pattern)
{
    if(ch in dict)
    {
        //dict[ch]+=1;
        console.log(ch);
        break;
    }
    else
    {
        dict[ch]=1;
    }
}
