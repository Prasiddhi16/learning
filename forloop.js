/*let n=prompt("Enter a number");
n=Number.parseInt(n);
let num=1;
for(let i=n;i>0;i--)
{
    num*=i;

}
alert("The factorial of "+n+"is"+num);
*/
const obj=
{
    siddhi:12,
    ram:45,
    sita:67,
    hari:24,
}
for(let i=0;i<Object.keys(obj).length;i++)
{
    console.log ("The marks of "+Object.keys(obj)[i]+" is "+ obj[Object.keys(obj)[i]] )
}