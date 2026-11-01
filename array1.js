let a=[1,2,3,4,5,6,7]
function add()
{
let b=prompt("Enter the number")
b=Number.parseInt(b)
a.push(b)
c=prompt("Do you want to continue y/n?")
if(c=='y')
{
    add()
}
else{
    
console.log(a);
}
}
add()


