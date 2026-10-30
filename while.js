let n=prompt("Enter a number");
n=Number.parseInt(n);
let num=1;
let i=n;
while(i>0)
{
    num *=i;
    i--;

}
console.log("The factorial of "+"n"+" is " +num);