//works in browser
let a=prompt("Enter a number from 1 to 7");
a=Number.parseInt(a);
switch(a)
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("Friday");
        break;
     case 7:
        console.log("Saturady");
        break;

    default:
        {
            console.log("Please enter a valid number")
        }

}