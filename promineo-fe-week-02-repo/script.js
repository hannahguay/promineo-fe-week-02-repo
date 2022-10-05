let myName = "deborah";

if (myName == "sam") {
    console.log("Hello, sam!")
} else {
    console.log("Hello, " + myName)
}

let costOfMilk = 1;

if (costOfMilk < 2) {
    console.log('I\'ll take two');
} else if (costOfMilk < 3) {
    console.log('I\ll take one');
} else {
    console.log('No thanks, too expensive!');
}

let grade = 'F';

switch (grade) {
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    case 'D':
        console.log('60-69');
    default:
        console.log('0-69');
}

let a = 5;
let b = 6;

// below is a nested if statement. Because there is just the inner if statement
// it should be converted to an && statement. If there were another condition inside, it would 
// be fine to keep it nested.

if (a == 5) {
    if (b == 6) {
        console.log('a is 5 and b is 6');
    }
}

// below is the same statement but flattened to an && statement

if (a == 5 && b == 6) {
    console.log('a is 5 and b is 6')
}