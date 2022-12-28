var num=1634;
var temp=num;
var sum=0;
var numofdigits=num.toString().length;
while(temp>0)
{
    var digit=temp%10;
    sum+=digit**numofdigits;
    temp=parseInt(temp/10);
}
if(sum==num)
{
    console.log("Armstrong number");
}
else
{
    console.log("Not an armstrong number");
}