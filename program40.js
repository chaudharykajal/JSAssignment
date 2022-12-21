function reverse_digit(num)
{
    num=num.toString();
    return num.split("").reverse().join("");
}
console.log(Number(reverse_digit(477723)))