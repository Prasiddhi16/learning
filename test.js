let a=document.getElementById("bt1")
let b=document.getElementById("bt2")
let c=document.getElementById("bt3")
let d=document.getElementById("bt4")
let e=document.getElementById("bt5")
a.addEventListener("click",function(){

    alert("You have clicked 1")
});
b.addEventListener("click",()=>
{
    alert("You have clicked 2")
})
c.addEventListener("click",()=>
{
    alert("You have clicked 3")
})
d.addEventListener("click",()=>
{
    alert("You have clicked 4")
})
e.addEventListener("click",()=>
{
    alert("You have clicked 5")
    setInterval(function()
{
    confirm("Do you want ideas")
},5000)
});

