let randomNumber = Math.floor(Math.random() * 101); // random number 0–100
let chances = 0;

function check() {
    while (true) {//executes whenever it is always ture like until break comes ;infinite loop
        let a = prompt("Enter a number between 0 and 100:");
        a = Number.parseInt(a);

        if (isNaN(a)) {
            alert(" Please enter a valid number!");
            continue;
        }

        chances++;

        if (a === randomNumber) {
            alert(" You got the right number after " + chances + " tries.");
            break; // exit loop when correct
        } else if (a < randomNumber) {
            alert("The number you chose is too small.");
        } else {
            alert("The number you chose is too big.");
        }
    }
}

check();
