setInterval(function ()
{
let d=new Date()
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let dayName = days[d.getDay()];
let monthName = months[d.getMonth()];
let dateNum = String(d.getDate()).padStart(2, "0");
h=String(d.getHours()).padStart(2,"0")
m=String(d.getMinutes()).padStart(2,"0")
s=String(d.getSeconds()).padStart(2,"0")
document.getElementById("day").textContent = `${dayName}, ${monthName} ${dateNum}`;


document.getElementById("hours").textContent=h

document.getElementById("minutes").textContent=m

document.getElementById("seconds").textContent=s

},1000);



