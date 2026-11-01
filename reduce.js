let arr=[]
let a=prompt("Enter the number for factorial")
a=Number.parseInt(a);
for(i=a;i>0;i--)
{
    arr.push(i)
}
console.log(arr)
let fac=arr.reduce((h1,h2)=>
{
    return h1*h2;
})
alert("The factorial of "+a+" is "+fac)