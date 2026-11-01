let a=[1,2,3,4,5,6,7]
function add()
{
    while(true){
let b=prompt("Enter the number")
b=Number.parseInt(b)
if(b==0)
{
   break;
}
a.push(b)
c=prompt("Do you want to continue y/n?")
if(c!=='y')
{
    break;
}
    }


    
console.log(a);
}

add()