
"use strict";



function showRandomTip(){
    let tips = [
        "Always declare variables with var, let, or const.",
        "Use === instead of == for comparison.",
        "Use strict mode to catch common coding mistakes.",
        "Keep your code DRY (Don't Repeat Yourself).",
        "Use meaningful variable and function names.",
        "Comment your code to explain complex logic.",
        "Use template literals for string concatenation.",
        "Avoid global variables to prevent conflicts.",
        "Use arrow functions for concise syntax.",
        "Always handle errors with try-catch blocks."
    ];

    let n=Math.floor(Math.random()*tips.length);
    document.getElementById('tipDisplay').innerText = tips[n];
}

function showTheDate(){
    let date = new Date();
    document.getElementById('dateDisplay').innerText = date.toLocaleString();
}


function isValidFullName(fullName) {
    let fullNameRegex = /^([A-Za-z]{3,})(\s[A-Za-z]{3,})*$/;
    return fullNameRegex.test(fullName);
}

function isValidEmail(email) {
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com\.eg|net\.eg|edu\.eg|org\.eg)$/;
    return emailRegex.test(email);
}