
function avg()
{ let sum=0
    for(let i=0;i<5;i++)
    {
    a=prompt("Enter the number");
    a=Number.parseInt(a);
    sum +=a;
    }
    avg=sum/5;
   console.log ("The average is "+ avg);
    
}
avg()
