function fibonnaci(num)
{
    let n1=0;
    let n2=1;
    let sum;
    for(let i=0;i<num;i++)
    {
        sum=n1+n2;
        n1=n2;
        n2=sum;
    }
    return n2;
}
console.log(fibonnaci(17));