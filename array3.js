let a=[1,2,3,8,37,90,24,50,70,33,12,10]
console.log(a)
let b=a.filter((value=Number.parseInt(value))=>
{
    return value%10==0;
}
)
console.log(b);

