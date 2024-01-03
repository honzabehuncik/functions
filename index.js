// Soucet cisel
function scitaniCisel(a, b) {
    return a + b;
}

// Loop s vyssim cislem
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// Deleni cisel
function deleniCisel(a, b) {
    return a / b;
}

// Sudost cisel
function sudost(a) {
    let result;
    if(a % 2 == 0) {
        result = "Cislo je sude";
    }
    else {
        result = "Cislo je liche";
    }
    return result;
}

// Rozdeleni textu
function splitText(text) {
    return text.split('');
}

// Prevedeni textu
function upperCaseText(text) {
    return text.toUpperCase();
}

// Repat textu
function repeatText(text) {
    return text.repeat(4);
}


// Console logs
console.log("Soucet cisel: " + scitaniCisel(5, 4));
console.log("Deleni cisel: " + deleniCisel(40, 4));
console.log("Sudost cisla: " + sudost(5));
console.log("Splitted text: " + splitText('FDSFDS'))
console.log("Upper case text: " + upperCaseText('fdjfdafssf'))
console.log("Repeat text: " + repeatText('Text Repeat '))