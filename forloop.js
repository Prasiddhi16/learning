let n=prompt("Enter a number");
n=Number.parseInt(n);
let num=1;
for(let i=n;i>0;i--)
{
    num*=i;

}
alert("The factorial of "+n+"is"+num);