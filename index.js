
// console.log("hello!");

// Itn 1

let hacker1 = "Ken"
console.log("The drivers name is", hacker1); // drivers name 

let hacker2 = "Brown"
console.log("The navigators name is", hacker2);  // navigators name

// Itn 2

if (hacker1.length > hacker2.length) {
    console.log("the driver has the longest name, it has", hacker1 + "character");
} else if (hacker1.length < hacker2.length) {
    console.log("it seems that the navigator has the longest name, it has", hacker2.length + "characters");
} else {
    console.log("wow, you both have equally long names,", hacker1.length + "characters");
}

// Itn 3

let driverName = ""
for (let i = 0; i <= hacker1.length; i++) {
    driverName += hacker1[i] + " "
}
console.log(driverName.toUpperCase());


let anotherName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    anotherName += hacker2[i];
}
console.log(anotherName);


hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
    console.log("the drivers name goes first.");
}
else if (hacker1 < hacker2) {
    console.log("yo, the navigators name goes first definitely.");
}
else {
    console.log("what? you both have the same name?");
}


