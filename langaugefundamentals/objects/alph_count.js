var data="HHHAAPPD"
var dict={}
for ( let ch of data)
{
    if(ch in dict)
    {
        dict[ch]+=1;
    }
    else
    {
        dict[ch]=1;
    }
}
console.log(dict)
var str=""
for( key in dict)
{
    str = str + dict[key]+key;
}
console.log(str);
