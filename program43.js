var num=370;
var temp=num;
var sum=0;
while(temp>0)
{
    var digit=temp%10;
    sum+=digit**3;
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