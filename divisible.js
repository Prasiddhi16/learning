let a=prompt("Enter a number");
a=Number.parseInt(a);
if(a%2==0)
{
    if(a%3==0)
    {
        console.log("The number is divisible by both 2 and 3")
    }
}
else{
    console.log("The number is not divisible by 2 and 3 both");
}