console.log("hello")
window.onload = function () {
    alert("welcome to my Portfolio");
};
document.body.addEventListener("click",() =>{
    document.body.style.background = "lightblue";
});
let clickCount = 0;

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        clickCount++;

        console.log("Button Clicked:", clickCount);
    });
});
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
});

var city1 = "Dehradun";
var city = "patna";

console.log("City:", city1 );

let age = 100;
age = 19;

console.log("Age:", age);

const country = "India";

console.log("Country:", country);

// ==========================
// 2. Strings, Numbers, Booleans
// ==========================

let firstname = "Utsav";
let marks = 95;
let isStudent = true;

console.log(firstname);
console.log(marks);
console.log(isStudent);

let firstName = "Utsav";
let lastName = "Kumar";

let fullName = firstName + " " + lastName;

console.log("Student Name:", fullName);

let num = 369;
let str = "100";

console.log(num);
console.log(str);

console.log(typeof num);
console.log(typeof str);

let number = -100;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

let Age = 19;

if (Age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}
let n = 7;

if (n % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
function add(x, y) {
    return x + y;
}
console.log("Sum:", add(10, 20));

function greet(name) {
    return "Hello " + name + "";
}

console.log(greet("Utsav"));

function square(num) {
    return num * num;
}
console.log("The number is 6");
console.log("Square:", square(6));

